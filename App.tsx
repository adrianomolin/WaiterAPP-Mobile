import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/hooks/auth';

import 'react-native-reanimated';
import 'react-native-gesture-handler';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { Main } from './src/Main';
import { LoadingProvider } from './src/hooks/loading';
import { TableProvider } from './src/hooks/table';
import { CartProvider } from './src/hooks/cart';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="dark" />
      <LoadingProvider>
        <AuthProvider>
          <TableProvider>
            <CartProvider>
              <Main />
            </CartProvider>
          </TableProvider>
        </AuthProvider>
      </LoadingProvider>
    </>
  );
}
