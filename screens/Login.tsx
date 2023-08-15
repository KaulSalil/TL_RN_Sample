import React, {useState} from 'react';
import {TextInput, Button, View, Alert} from 'react-native';
import {validateCredentials} from '../businesslogic';

function Login() {
  const [userName, setUserName] = useState('');
  x;
  const [password, setPassword] = useState('');

  const onLoginPressed = (): void => {
    console.log(`userName:${userName} password:${password}`);
    if (validateCredentials(userName, password)) {
      Alert.alert('Login successful.');
    } else {
      Alert.alert('Login failed.');
    }
  };
  return (
    <View>
      <TextInput value={userName} onChangeText={setUserName} />
      <TextInput value={password} onChangeText={setPassword} />
      <Button onPress={onLoginPressed} title="Login" />
    </View>
  );
}
export default Login;
