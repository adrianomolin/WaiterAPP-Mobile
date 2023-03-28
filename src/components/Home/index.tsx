import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import {
  CategoriesContainer,
  MenuContainer,
} from './styles';

import { Header } from '../Header';
import { Categories } from '../Categories';
import { Menu } from '../Menu';
import { Product } from '../../types/Product';

import { Empty } from '../Icons/Empty';
import { Text } from '../Text';
import { Category } from '../../types/Category';
import { CenteredContainer } from '../../Main/styles';
import { api } from '../../utils/api';
import { useLoading } from '../../hooks/useLoading';
import { useTable } from '../../hooks/useTable';
import { useCart } from '../../hooks/useCart';

export function Home() {
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const { selectedTable, handleSaveTable } = useTable();
  const { handleResetCart, handleAddToCart } = useCart();
  const { handleLoading } = useLoading();

  function handleResetOrder() {
    handleSaveTable('');
    handleResetCart();
  }

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      api.get('/categories'),
      api.get('/products'),
    ])
      .then(([categoriesResponse, productsResponse]) => {

        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);
        setIsLoading(false);

        setTimeout(() => handleLoading(false), 5000);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId
      ? '/products'
      : `/categories/${categoryId}/products`;

    setIsLoadingProducts(true);

    const { data } = await api.get(route);

    setProducts(data);
    setIsLoadingProducts(false);
  }

  return (
    <>
      <Header
        selectedTable={selectedTable}
        onCancelOrder={handleResetOrder}
      >
        <Text size={14} opacity={0.9}>Bem vindo(a) ao </Text>
        <Text size={24} weight="700">
            WAITER
          <Text size={24}>APP</Text>
        </Text>
      </Header>
      {!isLoading ? (
        <>
          <CategoriesContainer>
            <Categories
              categories={categories}
              onSelectCategory={handleSelectCategory}
            />
          </CategoriesContainer>

          {isLoadingProducts ? (
            <CenteredContainer>
              <ActivityIndicator color="#000" size="large"/>
            </CenteredContainer>
          ) : (
            <>
              {products.length > 0 ? (
                <MenuContainer>
                  <Menu
                    products={products}
                    onAddToCart={handleAddToCart}
                  />
                </MenuContainer>
              ) : (
                <CenteredContainer>
                  <Empty />
                  <Text color="#666" style={{ marginTop: 24}}>Nenhum produto foi encontrado!</Text>
                </CenteredContainer>
              )}
            </>
          )}
        </>
      ) : (
        <CenteredContainer>
          <ActivityIndicator color="#000" size={24}/>
        </CenteredContainer>
      )}
    </>
  );
}
