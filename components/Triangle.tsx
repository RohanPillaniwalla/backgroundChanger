import React from 'react';
import {View} from 'react-native';

const Triangle = ({color}) => (
  <View
    style={{
      width: 0,
      height: 0,
      borderLeftWidth: 50,
      borderRightWidth: 50,
      borderBottomWidth: 80,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: color,
    }}
  />
);

export default Triangle;
