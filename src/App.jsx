import { Outlet } from 'react-router-dom';

import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Jooter from './components/footer/footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Jooter />
    </>
  );
}

export default App
