import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import color from '../constants/color';
const styles = StyleSheet.create({
  defaultText: {
    color: color.primary,
    fontSize: 18,
  },
});
export const Text = ({children, style = {}}) => {
  const textStyles = [styles.defaultText];
  textStyles.push(style);
  return <RNText style={textStyles}>{children}</RNText>;
};
