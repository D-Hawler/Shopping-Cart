import { Link } from 'react-router-dom';
import './navigation.module.css';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'store'}>Store</Link>
                </li>
                <li>
                    <Link to={'cart'}>Cart</Link>
                </li>
                <li>
                    <Link to={'Account'}>Account</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
