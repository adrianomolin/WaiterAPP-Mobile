import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import 'react-native-reanimated';
import 'react-native-gesture-handler';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { Main } from './src/Main';
import { AuthProvider } from './src/contexts/authContext';
import { LoadingProvider } from './src/contexts/loadingContext';
import { TableProvider } from './src/contexts/tableContext';
import { CartProvider } from './src/contexts/cartContext';

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
