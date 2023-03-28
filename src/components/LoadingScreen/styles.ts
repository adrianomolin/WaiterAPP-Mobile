import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { isAndroid } from '../../utils/isAndroid';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background: #D73035;
  flex: 1;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TopContainer = styled.View`
  align-items: center;
  margin-bottom: 64px;
`;

export const BottomContainer = styled.View``;
