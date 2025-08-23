import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.js';
import LandingPromo from './pages/landingPromo/landingPromo';
import ShopContent from './pages/shopContent/shopContent';
import Cart from './pages/cart/cart.js';
import Error404 from './pages/Error404/Error404';

import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { DataProvider } from './context/DataProvider';

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
      { path: '*', element: <Error404 /> },
    ],
    errorElement: <Error404 />,
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
