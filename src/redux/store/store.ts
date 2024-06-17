import { configureStore } from '@reduxjs/toolkit';

import blogReducer from '@/redux/store/blogSlice';
import highlightReducer from '@/redux/store/highlightSlice';
import menuReducer from '@/redux/store/menuItemSlice';
import tagHitReducer from '@/redux/store/tagHitSlice';

import pantipPickSlice from './pantipPickSlice';

export const store = configureStore({
  reducer: {
    highlight: highlightReducer,
    menu: menuReducer,
    blog: blogReducer,
    tagHits: tagHitReducer,
    pick: pantipPickSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
