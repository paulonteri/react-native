import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, formViewStyles } from './styles';

export default function Login(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.text}>Login to Inuua Tujenge</Text>
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
        <Button
          title="Login"
          onPress={() => props.navigation.navigate('Home')}
        />
      </View>
      {/* <--- end formView ---> */}
    </SafeAreaView>
  );
}
