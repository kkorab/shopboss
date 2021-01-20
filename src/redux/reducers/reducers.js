import data from 'data';

const initialState = {
  products: [...data],
  currentProduct: data[0],
  wishlist: [],
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
