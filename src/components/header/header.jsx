import { Link } from 'react-router-dom';

import style from './header.module.css';
import './header.module.css';

function Header() {
    return (
        <header>
            <div className={style.logoContainer}>
                <Link href='/'>
                    <img className={style.logo} src='src/assets/logo.png' alt='Logo' />
                </Link>
                <h1>
                    <Link href='/'>Fake Store</Link>
                </h1>
            </div>
        </header>
    );
};

export default Header;
