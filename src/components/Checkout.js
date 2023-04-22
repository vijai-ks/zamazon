import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      {basket.length === 0 ? (
        <div className="checkout__items">
          <h2>Your Cart is Empty. Please Add any Items to Cart</h2>
          <p>
            You have no items in your cart. To buy one or more items, click "Add
            to Cart" next to the item
          </p>
        </div>
      ) : (
        <div className="checkout__items">
          <h2 className="checkout__title">Your Basket</h2>
          {basket?.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Checkout;
