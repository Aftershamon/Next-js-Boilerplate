import { configureStore } from '@reduxjs/toolkit';

import highlightReducer from '@/redux/store/highlightSlice';

export const store = configureStore({
  reducer: {
    // forum: forumReducer,
    highlight: highlightReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
