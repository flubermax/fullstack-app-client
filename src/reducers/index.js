import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { adsReducer } from './adsReducer';
import { sortReducer } from './sortReducer';
import { singlePageReducer } from './singlePageReducer';
import { userReducer } from './userReducer';


const rootReducer = combineReducers({
  adsReducer, sortReducer, singlePageReducer, userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))