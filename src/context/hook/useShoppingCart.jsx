import { useContext } from 'react';

import { ShoppingCartContext } from '../ShoppingCartContext';

function useShoppingCart() {
  return useContext(ShoppingCartContext);
};

export default useShoppingCart;
