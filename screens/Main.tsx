import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Posts} from './Posts';
import {PostDetails} from './PostDetails';
import Login from './Login';
import {Post} from '../hooks/usePosts';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  PostDetails: {post: Post};
};

const MainStack = createNativeStackNavigator<RootStackParamList>();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Login" component={Login} />
    <MainStack.Screen name="Home" component={Posts} />
    <MainStack.Screen name="PostDetails" component={PostDetails} />
  </MainStack.Navigator>
);
