import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../components/reducer/counter.reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: () => ({}),
  },
});
