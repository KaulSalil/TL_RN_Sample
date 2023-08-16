import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text} from '../components/Text';
import colors from '../constants/color';

export const PostDetails = ({route}): JSX.Element => {
  const {post} = route && route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.lable}>Title:</Text>
      <Text style={styles.header}>{post.title}</Text>
      <Text style={styles.lable}>Body:</Text>
      <Text style={styles.post}>{post.body}</Text>
      <Text style={styles.lable}>User Id:</Text>
      <Text style={styles.post}>{post.userId}</Text>
      <Text style={styles.lable}>Id:</Text>
      <Text style={styles.post}>{post.id}</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 30,
  },
  header: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 40,
    color: colors.primary,
    paddingBottom: 15,
  },
  commentHeader: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.primary,
    paddingBottom: 15,
  },
  post: {
    flex: 1,
    paddingBottom: 15,
    alignItems: 'center',
  },
  lable: {color: colors.primary, fontSize: 20},
});
