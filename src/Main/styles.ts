import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { isAndroid } from '../utils/isAndroid';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background: #FAFAFA;
`;

export const Footer = styled.View`
  background-color: #fff;
  min-height: 110px;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
  background: #fff;
`;

export const CenteredContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
