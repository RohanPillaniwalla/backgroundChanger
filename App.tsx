/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Square from './components/Square';
import Rectangle from './components/Rectangle';
import Triangle from './components/Triangle';
import Circle from './components/Circle';

function App(): JSX.Element {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#ffffff');
  const [randomCircleColor, setRandomCircleColor] = useState('#000000');
  const [randomSquareColor, setRandomSquareColor] = useState('#000000');
  const [randomRectangleColor, setRandomRectangleColor] = useState('#000000');
  const [randomTriangleColor, setRandomTriangleColor] = useState('#000000');

  const generateRandomColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += hexRange.charAt(Math.floor(Math.random() * 16));
    }
    return color;
  };

  const generateCircleColor = () => {
    const color = generateRandomColor();
    setRandomCircleColor(color);
  };

  const generateTriangleColor = () => {
    const color = generateRandomColor();
    setRandomTriangleColor(color);
  };

  const generateSquareColor = () => {
    const color = generateRandomColor();
    setRandomSquareColor(color);
  };

  const generateRectangleColor = () => {
    const color = generateRandomColor();
    setRandomRectangleColor(color);
  };

  const generateDifferentColor = () => {
    let newBackgroundColor;

    generateCircleColor();
    generateTriangleColor();
    generateSquareColor();
    generateRectangleColor();

    do {
      newBackgroundColor = generateRandomColor();
    } while (
      newBackgroundColor === randomCircleColor ||
      newBackgroundColor === randomTriangleColor ||
      newBackgroundColor === randomSquareColor ||
      newBackgroundColor === randomRectangleColor
    );
    setRandomBackgroundColor(newBackgroundColor);
  };

  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View
        style={[styles.container, {backgroundColor: randomBackgroundColor}]}>
        <View style={styles.shapeAlignment}>
          <Square color={randomSquareColor} />
          <Circle color={randomCircleColor} />
          <Rectangle color={randomRectangleColor} />
          <Triangle color={randomTriangleColor} />
        </View>

        <TouchableOpacity onPress={generateDifferentColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTXt}>Press</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  shapeAlignment: {
    flexDirection: 'row',
  },
  actionBtnTXt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default App;
