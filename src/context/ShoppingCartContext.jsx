import { createContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const filteredCart = shoppingCart.filter((item) => item.count !== 0);
    if (filteredCart.length !== shoppingCart.length) {
      setShoppingCart(filteredCart);
    }
  }, [shoppingCart]);

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider, ShoppingCartContext };
