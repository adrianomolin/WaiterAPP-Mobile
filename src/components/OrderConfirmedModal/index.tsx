import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OkButton } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <Container>
        <Text>
          <CheckCircle />
        </Text>

        <Text size={20} weight="600" color="#FFFFFF" style={{ marginTop: 12 }}>
          Pedido confirmado
        </Text>

        <Text opacity={0.9} color="#fff" style={{ marginTop: 12 }}>
          O pedido já entrou na fila de produção!
        </Text>

        <OkButton onPress={onOk}>
          <Text
            color="#D73035"
            weight="600"
          >
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
