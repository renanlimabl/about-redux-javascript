import { ActionTypes } from './actions';

import produce from 'immer';

const INITIAL_STATE = {
  items: [],
  failedStockCheck: []
}

const cart = (state = INITIAL_STATE, action) => {

  return produce(state, draft => {
    switch (action.type) {

      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = state.items.findIndex(item =>
          item.product.id === product.id
        );

        // Se já existir esse produto no carrinho, precisamos incrementar uma quantidade.
        if (productInCartIndex >= 0) {
          // draft.items[productInCartIndex].quantity += 1
          return {
            ...state,
            items: state.items.map((item =>
              item.product.id === product.id
                ?
                { ...item, quantity: item.quantity + 1 }
                :
                item
            ))
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
        // break;
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
        return draft;
      }
    }
  })
}

export default cart;