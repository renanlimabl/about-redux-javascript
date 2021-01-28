import { ActionTypes } from './actions';

const INITIAL_STATE = {
  items: []
}

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.addProductToCartRequest: {
      const { product } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1
          }
        ]
      }
    }

    default: {
      return state;
    }
  }
}

export default cart;