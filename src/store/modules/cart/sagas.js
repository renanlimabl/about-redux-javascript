/**
 * all serve para exportar todos em paralelo,
 * takeLatest serve para executar apenas o último click do user.
 * select serve para acessar ao estado da aplicação (Redux)
 * call serve para fazer chamadas assincronas, chamar api por exemplo.
 * put serve para fazer um dispatch, (disparar uma action)
 */
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { ActionTypes, addProductToCartFailure, addProductToCartSuccess } from './actions';
import api from '../../../services/api';


/**
 * Como nossa action é a função que retorna um type e um payload, e precisamos do payload
 * podemos 1º pegar = action.payload
 * ou 2º pegar { payload } fazerndo uma destruturação. 
 */
function* checkProductStock({ payload }) {
  const { product } = payload;

  // Vamos checar quantidade do produto passado para o carrinho.
  const currentQuantity = yield select((state) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity || 0
  })

  // Vamos checar se existe estoque do produto.
  const availableStockResponse = yield call(api.get, `stock/${product.id}`)

  /**
   * Se a quantidade de estoque for maior que a quantidade que estamos adicionando,
   * podemos prosseguir
   */

  if (availableStockResponse.data.quantity > currentQuantity) {
    console.log('deu certo, podemos add')
    yield put(addProductToCartSuccess(product))
  } else {
    console.log('deu errado, falta de estoque')
    yield put(addProductToCartFailure(product.id))
  }
}

/**
 * AGORA PRECISAMOS DENTRO DO ALL, INTERCEPTAR UM ACTION!
 * A QUAL SERÁ A REQUEST, USANDO A FUNÇÃO takeLatest!
 */
export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
])

