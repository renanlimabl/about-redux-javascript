import { ActionTypes } from './actions';

const INITIAL_STATE = {
  items: [],
  failedStockCheck: []
}

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ActionTypes.addProductToCartSuccess: {
      const { product } = action.payload;

      const productInCartIndex = state.items.findIndex(item =>
        item.product.id === product.id
      );

      // Se já existir esse produto no carrinho, precisamos incrementar uma quantidade.
      if (productInCartIndex >= 0) {
        return {
          ...state,
          items: [
            ...state.items,
            state.items[productInCartIndex].quantity += 1
          ]
        }
      } else {
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
    }

    case ActionTypes.addProductToCartFailure: {
      console.log('failure', action.payload)
      return {
        ...state,
        failedStockCheck: [
          ...state.failedStockCheck,
          action.payload.productId
        ]
      }
    }

    default: {
      return state;
    }
  }
}

export default cart;