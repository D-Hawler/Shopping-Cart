import Loader from "../loader/loader";
import Card from "../card/card";

import useShoppingCart from "../../context/hook/useShoppingCart";
import useData from "../../context/hook/useData";

import style from "./shopContent.module.css";

function ShopContent() {
  const { shoppingCart, setShoppingCart } = useShoppingCart();
  const { data, loading, error } = useData();

  const handleAddToCart = (id) => {
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
        {data.map((card) => {
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
