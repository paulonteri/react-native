import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home(props) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        style={{ margin: 20 }}
        title="Login"
        onPress={() => props.navigation.navigate('Login')}
      />
      <Button
        style={{ margin: 20 }}
        title="Go back"
        onPress={() => props.navigation.goBack()}
      />
    </View>
  );
}
