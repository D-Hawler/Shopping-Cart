import Button from "../button/button";

import './card.module.css';

function Card({ title, image, description, rating, price  }) {
    return (
        <article>
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
                            <Button description={'Add to cart'} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Card;
