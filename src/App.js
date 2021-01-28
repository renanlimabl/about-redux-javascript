import React from 'react';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
