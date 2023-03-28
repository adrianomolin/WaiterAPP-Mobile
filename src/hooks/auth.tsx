import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { UserProps } from '../types/User';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLoading } from './loading';

interface AuthContextData {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLogging: boolean;
  user: UserProps | null;
}

interface AuthProviderProps {
  children: ReactNode
}

const USER_COLLECTION = '@waiterapp:users';

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogging, setIsLogging] = useState<boolean>(false);
  const [user, setUser] = useState<null | UserProps>(null);
  const [isCorrect, setIsCorrect] = useState(true);

  const { handleLoading } = useLoading();

  async function signIn(email: string, password: string) {
    if(!email || !password) {
      return Alert.alert('login', 'Informe o e-mail e a senha');
    }

    setIsLogging(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(acc => {
        const { email } = acc.user;
        firestore()
          .collection('users')
          .doc(acc.user.uid)
          .get()
          .then(async profile => {
            const { name, role } = profile.data() as UserProps;
            if(profile.exists) {
              const userData = {
                id: acc.user.uid,
                name,
                email: email || '',
                role
              };

              await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));
              setUser(userData);
              handleLoading(true);
              setIsLogging(false);
              setIsCorrect(true);
            }
          })
          .catch(() => Alert.alert('Login', 'Não foi possível buscar os dados de perfil do usuário.'));
      })
      .catch(err => {
        const { code } = err;

        setIsLogging(false);
        if(code === 'auth/wrong-password') {
          setIsCorrect(false);
        } else {
          return Alert.alert('Login', 'Não foi possível realizar o login.');
        }
      });
  }

  async function loadUserStorageData() {
    setIsLogging(true);

    const storagedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storagedUser) {
      const userData = JSON.parse(storagedUser) as UserProps;

      setUser(userData);
    }

    setIsLogging(false);
  }

  async function signOut() {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);

    setUser(null);
  }

  useEffect(() => {
    loadUserStorageData();
  },[]);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      isLogging,
      user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
