// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterReducer';
import addressReducer from './address/addressReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter: counterReducer,
  address: addressReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
