import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './src/components/Login';

const App = () => {
  return (
    <>
      <Login />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
