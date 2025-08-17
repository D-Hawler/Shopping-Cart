import { Link } from 'react-router-dom';
import Button from '../button/button';

import style from './landingPromo.module.css';
import './landingPromo.module.css';

function LandingPromo() {
    return (
        <section className={style.landingPromo}>
            <h1>Fake Store</h1>
            <p>
                Fake Store is a convenient online store with a wide range of products to suit every taste.
                We offer high-quality products at affordable prices and a simple, easy-to-use ordering system.
                Shop easily, quickly, and hassle-free!
            </p>
            <p><strong>Quick. Convenient. No frills.</strong></p>
            <Link to={'store'}>
                <Button
                    className={style.startButton}
                    description='Start shopping'
                />
            </Link>
        </section>
    );
};

export default LandingPromo;
