import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './store/store';

import Component from './screens';

const App = () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default App;
