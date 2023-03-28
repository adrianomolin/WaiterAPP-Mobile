import { MotiView } from 'moti';

import { SplashContainer } from './styles';
import { AppLogo } from '../Icons/AppLogo';
import { Text } from '../Text';

export function SplashScreen() {
  return (
    <SplashContainer>
      <MotiView
        from={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'timing',
          duration: 1000,
        }}
        style={{ alignItems: 'center'}}
      >
        <AppLogo />
        <Text
          color="#fff"
          size={32}
          weight="600"
          style={{ marginTop: 24, marginBottom: 6 }}
        >
        WAITER
          <Text color="#fff" size={32}>APP</Text>
        </Text>
        <Text color="#fff">O App do Garçom</Text>
      </MotiView>
    </SplashContainer>
  );
}
