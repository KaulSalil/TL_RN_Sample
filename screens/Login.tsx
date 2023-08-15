import React, {useState} from 'react';
import {
  TextInput,
  Button,
  View,
  Alert,
  useColorScheme,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {validateCredentials} from '../businesslogic';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Login({navigation}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPressed = (): void => {
    console.log(`userName:${userName} password:${password}`);
    if (validateCredentials(userName, password)) {
      Alert.alert('Login successful.');
      navigation.navigate('Home');
    } else {
      Alert.alert('Login failed.');
    }
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <TextInput value={userName} onChangeText={setUserName} />
        <TextInput value={password} onChangeText={setPassword} />
        <Button onPress={onLoginPressed} title="Login" />
      </View>
    </SafeAreaView>
  );
}
export default Login;
