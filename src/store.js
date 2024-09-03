// src/store.js
import { createStore } from 'redux';
import colorChanging from './reducer';

const store = createStore(colorChanging);

export default store;
