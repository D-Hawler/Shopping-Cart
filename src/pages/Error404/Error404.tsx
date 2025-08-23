import { Link } from 'react-router-dom';

import Button from '../../components/button/button';

import style from './Error404.module.css';

function Error404() {
  return (
    <main className={style.error}>
      <h1>Error 404</h1>
      <Link to={'/'}>
        <Button description={'Return to the main page'} />
      </Link>
    </main>
  );
}

export default Error404;
