import {
  Container,
  Footer,
  FooterContainer,
} from './styles';

import { TableModal } from '../components/TableModal';
import { Cart } from '../components/Cart';
import { Login } from '../components/Login';
import { LoadingScreen } from '../components/LoadingScreen';

import { useAuth } from '../hooks/auth';
import { useLoading } from '../hooks/loading';
import { useTable } from '../hooks/table';

import Routes from '../Routes';
import { Home } from '../components/Home';

export function Main() {
  const { user } = useAuth();
  const { isLoading } = useLoading();
  const { selectedTable } = useTable();

  return (
    <>
      {
        !user ? <Login />
          : isLoading ? <LoadingScreen />
            : (
              <>
                {selectedTable ? (
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
                ) : (
                  <Container>
                    <Routes />
                  </Container>
                )}
                <TableModal />
              </>
            )
      }
    </>
  );
}
