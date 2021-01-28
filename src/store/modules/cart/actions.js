export const ActionTypes = {
  addProductToCartRequest: 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess: 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure: 'ADD_PRODUCT_TO_CART_FAILURE'
}

export function addProductToCartRequest(product) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    }
  }
}

export function addProductToCartSuccess(product) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    }
  }
}

export function addProductToCartFailure(productId) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    }
  }
}