import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { formatDate } from '../../utils/formatDate';
import { api } from '../../utils/api';

import { Order } from '../../types/Order';

import {
  ItemQuantity,
  OrderHeader,
  OrderItem,
  OrderItems,
  OrdersDoneContainer,
  OrdersInProgressContainer,
  OrderStatus,
  StatusBall
} from './styles';

import { Header } from '../Header';
import { Text } from '../Text';

export function Orders() {
  const [orderItems, setOrderItems] = useState<Order[]>([]);
  const [oldOrderItems, setOldOrderItems] = useState<Order[]>([]);

  useEffect(() => {
    Promise.all([
      api.get('/orders'),
      api.get('/orders/all'),
    ]).then(([ordersResponse, oldOrdersResponse]) => {
      setOrderItems(ordersResponse.data);
      setOldOrderItems(oldOrdersResponse.data);
    });
  },[]);

  return (
    <>
      <Header>
        <Text size={24} weight="600">Pedidos</Text>
      </Header>
      <OrdersInProgressContainer>
        <Text size={18} weight="600" color="#666">Em Andamento</Text>

        <FlatList
          data={orderItems}
          style={{ marginTop: 32 }}
          keyExtractor={order => order._id}
          renderItem={({ item: order }) => (
            <>
              {order.status !== 'DONE' && (
                <OrderItem>
                  <OrderHeader>
                    <Text color="#000" size={14}>Mesa {order.table}</Text>
                    <OrderStatus style={{ backgroundColor: 'rgba(215, 108, 48, 0.05)'}}>
                      <StatusBall style={{
                        backgroundColor: '#D76C30',
                        borderColor: 'rgba(215, 108, 48, 0.1)',
                        borderStyle: 'solid',
                        borderWidth: 2
                      }}/>
                      <Text color="#D76C30" size={12}>
                        {order.status === 'WAITING' ? 'Em espera' : 'Entrou em produção' }
                      </Text>
                    </OrderStatus>
                  </OrderHeader>
                  <FlatList
                    data={order.products}
                    keyExtractor={product => product._id}
                    renderItem={({ item: product }) => (
                      <OrderItems>
                        <ItemQuantity>
                          <Text size={14} color="#999">{product.quantity}x</Text>
                        </ItemQuantity>
                        <Text size={14}>{product.product.name}</Text>
                      </OrderItems>
                    )}
                  />
                </OrderItem>
              )}
            </>
          )}
        />
      </OrdersInProgressContainer>
      <OrdersDoneContainer>
        <Text size={18} weight="600" color="#666">Anteriores</Text>

        <FlatList
          data={oldOrderItems}
          style={{ marginTop: 32 }}
          keyExtractor={order => order._id}
          renderItem={({ item: order }) => (
            <OrderItem>
              <OrderHeader>
                <Text color="#000" size={14}>Mesa {order.table}</Text>
                <OrderStatus
                  style={{
                    backgroundColor: 'rgba(102, 102, 102, 0.05)'
                  }}
                >
                  <StatusBall style={{
                    backgroundColor: '#666666',
                    borderColor: 'rgba(102, 102, 102, 0.1)',
                    borderStyle: 'solid',
                    borderWidth: 2
                  }}/>
                  <Text color="#666666" size={12}>
                        Finalizado em {formatDate(order.createdAt)}
                  </Text>
                </OrderStatus>
              </OrderHeader>
              <FlatList
                data={order.products}
                keyExtractor={product => product._id}
                renderItem={({ item: product }) => (
                  <OrderItems>
                    <ItemQuantity>
                      <Text size={14} color="#999">{product.quantity}x</Text>
                    </ItemQuantity>
                    <Text size={14}>{product.product.name}</Text>
                  </OrderItems>
                )}
              />
            </OrderItem>
          )}
        />
      </OrdersDoneContainer>
    </>
  );
}
