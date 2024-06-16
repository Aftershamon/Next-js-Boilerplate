'use client';

import { Provider } from 'react-redux';

import { CardItem } from '@/components/CardItem';
import { store } from '@/redux/store/store';

const Home = () => {
  return (
    <Provider store={store}>
      <CardItem />
    </Provider>
  );
};

export { Home };
