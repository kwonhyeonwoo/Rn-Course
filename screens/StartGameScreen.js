import { Alert, StyleSheet,  TextInput, View } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = ({ handleUserNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const handleReset = () => {
    setEnteredValue("");
  };

  const handleSubmit = () => {
    const choseNumber = parseInt(enteredValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
    };
    handleUserNumber(choseNumber);
    console.log("Sucess Confirm");
  };

  const handleChange = (text) => setEnteredValue(text);
  return (
    <View style={startGameWrapper}>
      <View style={card}>
        <TextInput
          style={textInput}
          maxLength={2}
          onChangeText={handleChange}
          value={enteredValue}
          keyboardType="number-pad"
        />
        <View style={btnContainer}>
          <PrimaryButton handleCustomPress={handleReset} text="RESET" />
          <PrimaryButton handleCustomPress={handleSubmit} text="Confirm" />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen

const { startGameWrapper, btnContainer, textInput, card } = StyleSheet.create({
  startGameWrapper: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  textInput: {
    borderoBottom: "yellow",
    borderBottomWidth: 1,
    borderBottomColor: "yellow",
    width: 50,
    paddingBottom: 5,
    fontSize: 24,
    textAlign: "center",
    color: "yellow",
  },
  card: {
    rowGap: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#3b021f",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    height: 30,
    columnGap: 5,
    flexDirection: "row",
    rowGap: 5,
  },
});