import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from 'expo-status-bar';
import Login from './Login';
import Home from './Home';
import { Button } from 'react-native';

const Stack = createStackNavigator();

const Components = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'Loaf',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        {/* <StatusBar style="auto" /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Components;
