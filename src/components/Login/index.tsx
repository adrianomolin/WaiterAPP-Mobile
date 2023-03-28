import { Container, Footer, FooterContainer, FormArea, FormInput, IncorrectPassword, Input, LoginScreen, PassForm, PassInput, ShowPassIcon, SplashTouch, WelcomeText } from './styles';
import { Text } from '../Text';
import { useState } from 'react';
import { Button } from '../Button';
import { ActivityIndicator } from 'react-native';

import { useAuth } from '../../hooks/useAuth';
import { CenteredContainer } from '../../Main/styles';
import { EyeIcon } from '../Icons/EyeIcon';
import { EyeIconHidden } from '../Icons/EyeIconHidden';
import { SplashScreen } from '../SplashScreen';
import { isAndroid } from '../../utils/isAndroid';
import { InfoIcon } from '../Icons/InfoIcon';


export function Login() {
  const [isClickedIn, setIsClickedIn] = useState(false);
  const [authPass, setAuthPass] = useState('');
  const [authMail, setAuthMail] = useState('');
  const [showPass, setShowPass] = useState(false);

  const { signIn, isLogging } = useAuth();

  function handleAuthentication() {
    signIn(authMail, authPass);
  }

  function handleShowPass() {
    setShowPass(prevState => prevState === false ? true : false);
  }

  return (
    <Container isClickedIn={isClickedIn} >
      {
        isClickedIn ? (
          <>
            {
              !isLogging ? (
                <LoginScreen behavior={isAndroid ? 'height' : 'padding'}>
                  <FormArea>
                    <WelcomeText>
                      <Text size={14} opacity={0.9}>Bem-vindo(a) ao</Text>
                      <Text size={24} color="#333" weight="700">WAITER<Text size={24}>APP</Text></Text>
                    </WelcomeText>
                    <FormInput>
                      <Text size={14} color="#666" style={{marginBottom: 8}}>E-mail</Text>
                      <Input
                        placeholder='Seu email de acesso'
                        onChangeText={setAuthMail}
                        autoCorrect={false}
                      />
                    </FormInput>
                    <FormInput>
                      <Text size={14} color="#666" style={{marginBottom: 8}}>Senha</Text>
                      <PassForm style={{ flexDirection: 'row' }}>
                        <PassInput
                          placeholder='Informe sua senha'
                          onChangeText={setAuthPass}
                          secureTextEntry={!showPass}
                          returnKeyType='go'
                          autoCorrect={false}
                        />
                        <ShowPassIcon onPress={handleShowPass}>
                          {
                            showPass ? (
                              <EyeIconHidden />
                            ) : (
                              <EyeIcon />
                            )
                          }
                        </ShowPassIcon>
                      </PassForm>

                      <IncorrectPassword>
                        <InfoIcon />
                        <Text style={{ marginLeft: 8 }} color="#D73035" size={14}> Senha incorreta. Tente novamente</Text>
                      </IncorrectPassword>
                    </FormInput>
                  </FormArea>

                  <FooterContainer>
                    <Footer>
                      <Button
                        disabled={authMail.length === 0 || authPass.length === 0}
                        onPress={handleAuthentication}
                      >
                    Fazer Login
                      </Button>
                    </Footer>
                  </FooterContainer>
                </LoginScreen>
              ) : (
                <CenteredContainer>
                  <ActivityIndicator color="#252525" size={24} />
                </CenteredContainer>
              )
            }
          </>
        ) : (
          <SplashTouch onPress={() => setIsClickedIn(true)}>
            <SplashScreen />
          </SplashTouch>
        )
      }
    </Container>
  );
}
