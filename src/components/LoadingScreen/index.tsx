import { useEffect, useState } from 'react';
import { ActivityIndicator, Animated } from 'react-native';

import { Text } from '../Text';
import { BottomContainer, Container, LoadingContainer, TopContainer } from './styles';


export function LoadingScreen() {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        flex: 1,
      }}
    >

      <Container>
        <LoadingContainer>
          <TopContainer>
            <Text size={14} color="#fff" opacity={0.9} style={{marginBottom: 4}}>Bem-vindo(a) ao</Text>
            <Text size={24} color="#fff" weight="700">
          WAITER
              <Text size={24} color="#fff" >APP</Text>
            </Text>
          </TopContainer>

          <BottomContainer>
            <ActivityIndicator color="#fff" size={24} style={{ marginBottom: 24}} />
            <Text color="#fff">Atualizando o cardápio.</Text>
          </BottomContainer>
        </LoadingContainer>
      </Container>
    </Animated.View>
  );
}
