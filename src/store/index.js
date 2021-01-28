import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


// Instânciar redux saga
const sagaMiddleware = createSagaMiddleware();

// Criamos array para ser distribuido no compose
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

// Precisamos por padrão chamar o .run() no redux saga.
sagaMiddleware.run(rootSaga)


export default store;