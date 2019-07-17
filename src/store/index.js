import { createStore, combineReducers } from 'redux';
import orders from './reducers/orders';

const rootReducer = combineReducers({ orders });

export default createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
