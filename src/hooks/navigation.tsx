import { createContext, ReactNode, useContext, useState } from 'react';

export type MenuTabs = 'Home' | 'Orders' | 'Profile';

interface NavigationContextProps {
  selectedTab: MenuTabs,
  handleSelectedTab: (tabId: MenuTabs) => void;
}

interface NavigationProviderProps {
  children: ReactNode
}

export const NavigationContext = createContext({} as NavigationContextProps);

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [selectedTab, setSelectedTab] = useState<MenuTabs>('Home');

  function handleSelectedTab(tabId: MenuTabs) {
    setSelectedTab(prevState => prevState === tabId ? prevState : tabId);
  }

  return (
    <NavigationContext.Provider value={{
      selectedTab,
      handleSelectedTab
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  return context;
}
