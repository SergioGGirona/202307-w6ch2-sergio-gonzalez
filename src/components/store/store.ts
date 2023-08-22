import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from '../../redux/counter.slice';

export const appStore = configureStore({
  reducer: {
    phone: phoneReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
