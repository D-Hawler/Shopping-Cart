import { Dispatch, SetStateAction } from 'react';

import Loader from "../../components/loader/loader";
import Card from "../../components/card/card";

import useShoppingCart from "../../context/hook/useShoppingCart";
import useData from "../../context/hook/useData";

import style from "./shopContent.module.css";

interface shoppingCartprops {
  id: string;
  count: number;
};

interface dataProps {
  id: string;
  title: string;
  image: string;
  description: string;
  rating?: {
    rate: number;
  };
  price: number;
};

function ShopContent() {
  const { shoppingCart, setShoppingCart } = useShoppingCart() as {
    shoppingCart: shoppingCartprops[];
    setShoppingCart: Dispatch<SetStateAction<shoppingCartprops[]>>;
  };
  const { data, loading, error } = useData() as {
    data: dataProps[];
    loading: boolean;
    error: boolean;
  };

  const handleAddToCart = (id: string) => {
    if (shoppingCart.find((product) => product.id === id)) {
      setShoppingCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item,
        ),
      );
    } else {
      setShoppingCart((prev) => [...prev, { id: id, count: 1 }]);
    }
  };

  if (loading) return <Loader />;
  if (error) return <p>error</p>;

  return (
    <section className={style.shopContent}>
      <div className={style.scrollableContent}>
        {data.map((card: dataProps) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              image={card.image}
              description={card.description}
              rating={card.rating}
              price={card.price}
              onClick={handleAddToCart}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ShopContent;
