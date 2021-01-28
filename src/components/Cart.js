import React from 'react';

const Cart = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Produto
          </th>
          <th>
            Preço
          </th>
          <th>
            Quantidade
          </th>
          <th>
            Subtotal
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tênis legal</td>
          <td>R$ 32,50</td>
          <td>2</td>
          <td>R$65,00</td>
        </tr>
        <tr>
          <td>Casaco legal</td>
          <td>R$ 30,50</td>
          <td>2</td>
          <td>R$61,00</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Cart;