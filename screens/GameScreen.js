import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title'
import Colors from '../utils/colors';
  const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };

const GameScreen = ({ userNumber }) => {
  const initailState = generateRandomBetween(1,100,userNumber);
  const [currentNumber, setCurrentNumber] = useState(initailState);
  return (
    <View>
      <Title title="Opponent's Guess" />
      <Text style={styles.currentNumber}>{currentNumber}</Text>
    </View>
  );
};

export default GameScreen

const styles = StyleSheet.create({
  currentNumber: {
    borderWidth: 1,
    marginTop:24,
    textAlign:'center',
    padding:10,
    borderColor: Colors.accent500,
    color: Colors.accent500,
  },
});