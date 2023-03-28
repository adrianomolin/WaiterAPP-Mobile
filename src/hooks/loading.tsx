import {
  createContext,
  ReactNode,
  useContext,
  useState
} from 'react';


interface AuthContextData {
  isLoading: boolean;
  handleLoading: (val: boolean) => void;
}

interface AuthProviderProps {
  children: ReactNode
}

export const LoadingContext = createContext({} as AuthContextData);

export function LoadingProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  function handleLoading(val: boolean) {
    setIsLoading(prevState => prevState === val ? prevState : val);
  }

  return (
    <LoadingContext.Provider value={{
      isLoading,
      handleLoading
    }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);

  return context;
}
