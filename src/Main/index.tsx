import {
  Container,
  Footer,
  FooterContainer,
} from './styles';

import { TableModal } from '../components/TableModal';
import { Cart } from '../components/Cart';
import { Login } from '../components/Login';
import { LoadingScreen } from '../components/LoadingScreen';

import { useAuth } from '../hooks/useAuth';
import { useLoading } from '../hooks/useLoading';
import { useTable } from '../hooks/useTable';

import Routes from '../Routes';
import { Home } from '../components/Home';

export function Main() {
  const { user } = useAuth();
  const { isLoading } = useLoading();
  const { selectedTable } = useTable();

  if (!user) {
    return <Login />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (selectedTable) {
    return (
      <>
        <Container>
          <Home />
        </Container>
        <FooterContainer>
          <Footer>
            <Cart />
          </Footer>
        </FooterContainer>
      </>
    );
  }

  return (
    <>
      <Container>
        <Routes />
      </Container>

      <TableModal />
    </>
  );
}
