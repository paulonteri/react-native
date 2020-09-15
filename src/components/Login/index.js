import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles, formViewStyles } from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
      </View>
      {/* <--- formView ---> */}
      <View style={formViewStyles}>
        <View style={styles.formInputView}>
          <Text style={styles.formText}>Username</Text>
          <TextInput style={styles.formInput} />
        </View>
        <View style={styles.formInputView}>
          <Text style={styles.formText}>Password</Text>
          <TextInput style={styles.formInput} />
        </View>
        <Button title="Login" />
      </View>
      {/* <--- end formView ---> */}
    </View>
  );
}
