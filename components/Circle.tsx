import React from 'react';
import {View} from 'react-native';

const Circle = ({color}) => (
  <View
    style={{width: 80, height: 80, borderRadius: 50, backgroundColor: color}}
  />
);

export default Circle;
