import React from 'react';
import {View} from 'react-native';

const Square = ({color}) => (
  <View
    style={{
      width: 80,
      height: 80,
      backgroundColor: color,
    }}
  />
);

export default Square;
