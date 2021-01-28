import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import CatalogItem from './CatalogItem';
import api from '../services/api';

const Catalog = () => {
  const [catalog, setCatalog] = useState([])
  // const cart = useSelector(state => state.cart)


  // segundo parâmetro vazio, pq só quero executar 1x
  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, [])



  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  )
}

export default Catalog;