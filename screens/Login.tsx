import React, {useState} from 'react';
import {
  TextInput,
  View,
  Alert,
  useColorScheme,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {validateCredentials} from '../businesslogic';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text} from '../components/Text';

function Login({navigation}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPressed = (): void => {
    console.log(`userName:${userName} password:${password}`);
    if (validateCredentials(userName, password)) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login failed.');
    }
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
          placeholder="User Name"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Pass Word"
        />
        <TouchableOpacity
          onPress={onLoginPressed}
          style={{
            backgroundColor: 'blue',
            alignSelf: 'stretch',
            marginHorizontal: 15,
            padding: 15,
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderColor: '#adadad',
    borderWidth: 2,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 15,
    alignSelf: 'stretch',
  },
});
export default Login;
