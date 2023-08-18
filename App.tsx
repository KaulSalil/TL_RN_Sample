/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// basic validation on login screen
// test cases for the login screen and list screen
// jest

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Main} from './screens/Main';

const queryClient = new QueryClient();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
