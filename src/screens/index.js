import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
// import { StatusBar } from 'expo-status-bar';
import Login from '../components/Login';
import Home from '../components/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // tab icons
          if (route.name === 'Home') {
            // iconName = focused ? 'md-home' : 'md-home-outline';
            iconName = 'ios-home';
          } else if (route.name === 'Settings') {
            iconName = 'ios-settings';
          } else if (route.name === 'Test') {
            iconName = 'ios-information-circle';
          }
          //
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Test" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
      {/* <StatusBar style="auto" /> */}
    </Tab.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeNavigation}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="Reset Password" component={} /> */}
      {/* <Stack.Screen name="Splash Screen" component={} /> */}
    </Stack.Navigator>
  );
};

const Components = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Components;
