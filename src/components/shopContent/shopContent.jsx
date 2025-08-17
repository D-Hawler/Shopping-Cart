import { useEffect, useState } from "react";

import Card from "../card/card";

import style from './shopContent.module.css';

function ShopContent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                if (!res.ok) throw new Error('Error during loading');
                return res.json(); 
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            })
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>error</p>

    return (
        <section className={style.shopContent}>
            {data.map((card) => {
                return (
                    <Card key={card.id}
                        title={card.title}
                        image={card.image}
                        description={card.description}
                        rating={card.rating}
                        price={card.price}
                    />
                );
            })}
        </section>
    );
};

export default ShopContent;
