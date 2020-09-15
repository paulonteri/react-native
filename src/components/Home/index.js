import React from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(props) {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}
