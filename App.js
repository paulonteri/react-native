import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from 'expo-status-bar';
import Login from './src/components/Login';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ title: 'Overview' }}
        />
        {/* <StatusBar style="auto" /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
