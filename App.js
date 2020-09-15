import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/store';

import Component from './src/components';

const App = () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default App;
