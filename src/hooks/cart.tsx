import { createContext, ReactNode, useContext, useState } from 'react';

import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import { useTable } from './table';

interface CartContextProps {
  cartItems: CartItem[];
  handleAddToCart: (product: Product) => void;
  handleDecrementCartItem: (product: Product) => void;
  handleResetCart: () => void;
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const { selectedTable, handleModalVisibility } = useTable();

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      handleModalVisibility(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id)
      ;

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id)
      ;

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  function handleResetCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      handleAddToCart,
      handleDecrementCartItem,
      handleResetCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
