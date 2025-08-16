import { Link } from 'react-router-dom';

import Navigation from '../navigation/navigation';

import style from './header.module.css';
import './header.module.css';

function Header() {
    return (
        <header>
            <div className={style.logoContainer}>
                <Link to='/'>
                    <img className={style.logo} src='src/assets/logo.png' alt='Logo' />
                </Link>
                <h1>
                    <Link to='/'>Fake Store</Link>
                </h1>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;
