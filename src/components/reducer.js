import trackpant from "../assets/trackpant.jpg";

export const initialState = {
  basket: [
    {
      id: "10",
      title: "Tockey Men Track Pant",
      price: 200,
      rating: 5,
      image: trackpant,
    },
  ],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, basket: [...state.basket, action.payload] };

    case "REMOVE_FROM_CART":
      let newBasket = [...state.basket];
      let index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };

    default:
      return { state };
  }
};
