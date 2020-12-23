import data from 'data';

const initialState = data;

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
