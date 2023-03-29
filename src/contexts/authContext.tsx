import { createContext, ReactNode, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { UserProps } from '../types/User';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLoading } from '../hooks/useLoading';
import { api } from '../utils/api';

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

    const { data } = await api.post('auth', { email, password });

    setIsLogging(true);

    await AsyncStorage.setItem('user', JSON.stringify(data.user));
    await AsyncStorage.setItem('token', JSON.stringify(data.token));

    api.defaults.headers.Authorization = `Bearer ${data.token}`;

    setUser(data.user);
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
