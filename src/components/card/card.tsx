import { MouseEventHandler } from "react";

import Button from "../button/button";

import style from './card.module.css';

interface Cardprops {
    id: string;
    title: string;
    image: string;
    description: string;
    rating?: {
        rate: number;
    };
    price: number;
    onClick: (id: string) => void;
};

function Card({ id, title, image, description, rating, price, onClick }: Cardprops) {
    return (
        <article className={style.card}>
            <div>
                <img src={image} alt={`Product image: ${title}`} />
                <div>
                    <div>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div>
                        <p>Rating: {rating?.rate ?? 'N/A'}</p>
                        <div>
                            <p>Price: ${price}</p>
                            <Button description={'Add to cart'} onClick={() => onClick(id)} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Card;
