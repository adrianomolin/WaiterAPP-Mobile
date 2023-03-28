import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { isAndroid } from '../../utils/isAndroid';

interface ContainerProps {
  isClickedIn: boolean
}

export const Container = styled.SafeAreaView<ContainerProps>`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  transition: backgroundColor 3s ease-in;
  flex: 1;
  background-color: ${props => props.isClickedIn ? '#fff' : '#d73035'}
`;

export const SplashTouch = styled.TouchableOpacity`
  flex: 1;
`;

export const LoginScreen = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: flex-end;
  align-items: stretch;
`;

export const WelcomeText = styled.View`
  align-items: center;
`;

export const FormArea = styled.View`
  padding: 24px;
  width: 100%;
  flex: 1;
  justify-content: center;
`;

export const FormInput = styled.View`
  margin-top: 24px;
`;

export const Input = styled.TextInput`
  background: #FFFFFF;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 16px;
  color: #666;
  font-weight: 400;
  width: 100%;
`;

export const PassInput = styled.TextInput`
  background: #FFFFFF;
  border: 1px solid ${({ isCorrect }) => isCorrect ? 'rgba(204, 204, 204, 0.5)' : '#D73035'};
  border-radius: 8px;
  padding: 16px;
  color: #666;
  font-weight: 400;
  width: 100%;
`;

export const FooterContainer = styled.SafeAreaView``;

export const Footer = styled.View`
  min-height: 110px;
  padding: 16px 24px;
`;

export const PassForm = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ShowPassIcon = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`;

export const IncorrectPassword = styled.View`
  opacity: ${({ isCorrect }) => isCorrect ? 0 : 1};
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
