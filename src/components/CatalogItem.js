import React from 'react';

const CatalogItem = ({ product }) => {
  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {" - "}
      <button type="button">
        Comprar
      </button>
    </article>
  )
}

export default CatalogItem;