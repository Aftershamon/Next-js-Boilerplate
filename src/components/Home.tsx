'use client';

import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store/store';

interface HomeProps {
  Component: React.ElementType;
}

const Home: React.FC<HomeProps> = ({ Component }) => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default Home;
