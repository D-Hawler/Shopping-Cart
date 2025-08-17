import { Outlet } from 'react-router-dom';

import Header from './components/header/header';
import Jooter from './components/footer/footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='scrollableContent'>
        <main>
          <Outlet />
        </main>
        <Jooter />
      </div>
    </>
  );
}

export default App;
