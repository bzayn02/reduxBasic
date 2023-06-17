import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import formReducer from './userSlice';

const store = configureStore({
  reducer: {
    counterData: counterReducer,
    formData: formReducer,
  },
});

export default store;
