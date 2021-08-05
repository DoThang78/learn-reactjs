import counterReducer from '../features/Counter/counterSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
    counter: counterReducer,
}; //noi chua cac reducer dang co

const store = configureStore({
    reducer: rootReducer,
});

export default store;
