import { Link } from 'react-router-dom';
import Button from '../button/button';

import style from './landingPromo.module.css';
import './landingPromo.module.css';

const start = <Link to={'store'}>Start shopping</Link>;

function LandingPromo() {
    return (
        <section>
            <h1>Fake Store</h1>
            <p>
                Fake Store is a convenient online store with a wide range of products to suit every taste.
                We offer high-quality products at affordable prices and a simple, easy-to-use ordering system.
                Shop easily, quickly, and hassle-free!
            </p>
            <p><strong>Quick. Convenient. No frills.</strong></p>
            <Button className={style.startButton} description={start} />
        </section>
    );
};

export default LandingPromo;
