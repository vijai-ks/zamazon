export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, basket: [...state.basket, action.payload] };

    case "REMOVE_FROM_CART":
      return { state };

    default:
      return { state };
  }
};
