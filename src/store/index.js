import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { adsReducer } from './adsReducer';


export const store = createStore(adsReducer, composeWithDevTools(applyMiddleware()))