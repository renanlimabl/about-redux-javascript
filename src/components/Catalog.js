import React from 'react';
import { useSelector } from 'react-redux';
import CatalogItem from './CatalogItem';

const Catalog = () => {
  const cart = useSelector(state => state.cart)

  console.log(cart);

  return (
    <main>
      <h1>Catalog</h1>
      <CatalogItem />
    </main>
  )
}

export default Catalog;