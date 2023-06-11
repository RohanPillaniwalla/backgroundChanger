import React from 'react';
import {View} from 'react-native';

const Rectangle = ({color}) => (
  <View
    style={{
      width: 100,
      height: 80,
      backgroundColor: color,
    }}
  />
);

export default Rectangle;
