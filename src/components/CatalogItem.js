import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCartRequest } from '../store/modules/cart/actions';

const CatalogItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])

  const state = useSelector(state => state)

  console.log(state)

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {" - "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  )
}

export default CatalogItem;