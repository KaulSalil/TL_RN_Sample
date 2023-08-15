import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Posts} from './Posts';
import {Post} from './Post';
import Login from './Login';
const MainStack = createNativeStackNavigator();
export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Login" component={Login} />
    <MainStack.Screen name="Home" component={Posts} />
    <MainStack.Screen name="Post" component={Post} />
  </MainStack.Navigator>
);
