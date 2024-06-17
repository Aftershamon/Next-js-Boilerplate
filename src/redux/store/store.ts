import { configureStore } from '@reduxjs/toolkit';

import highlightReducer from '@/redux/store/highlightSlice';
import menuReducer from '@/redux/store/menuItemSlice';

export const store = configureStore({
  reducer: {
    highlight: highlightReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
