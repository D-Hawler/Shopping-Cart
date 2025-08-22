import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import LandingPromo from './components/landingPromo/landingPromo.jsx';
import ShopContent from './components/shopContent/shopContent.jsx';
import Cart from './components/cart/cart.jsx';

import { ShoppingCartProvider } from './context/ShoppingCartContext.jsx';
import { DataProvider } from './context/DataProvider.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DataProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </DataProvider>
    ),
    children: [
      { index: true, element: <LandingPromo /> },
      { path: 'store', element: <ShopContent /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
