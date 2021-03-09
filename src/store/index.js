import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { adsReducer } from './adsReducer';
import { sortReducer } from './sortReducer';
import { singlePageReducer } from './singlePageReducer';


const rootReducer = combineReducers({
  adsReducer, sortReducer, singlePageReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))