import { all } from 'redux-saga/effects';

function* checkProductStock({ payload }) {
  const { product } = payload;
  yield product;
}

export default all([
  checkProductStock
])

