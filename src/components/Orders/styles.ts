import styled from 'styled-components/native';

export const OrdersInProgressContainer = styled.View`
  padding: 0 24px;
  margin-top: 46px;
  max-height: 350px;
`;

export const OrderItem = styled.View`
  background: #fff;
  border-radius: 8px;
  margin-bottom: 8px;
  min-height: 144px;
  padding: 24px;
`;

export const OrderHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const OrderStatus = styled.View`
  flex-direction: row;
  border-radius: 4px;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
`;

export const OrderItems = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const ItemQuantity = styled.View`
  min-width: 20px;
`;

export const OrdersDoneContainer = styled.View`
  padding: 0 24px;
  margin-top: 46px;
`;

export const StatusBall = styled.View`
  width: 4px;
  height: 4px;

  margin-right: 6px;

  border-radius: 16px;
`;
