import React from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  Modal,
  View,
  handleModalOnOff,
  Image,
} from "react-native";

const GoalInput = ({
  handleSubmit,
  handleChange,
  isModalOpen,
  handleModalOnOff,
}) => {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={inputContainer}>
        <Image style={{ width:50,height:50}} source={require("../assets/images/goal.png")} />
        <TextInput
          onChangeText={handleChange}
          style={textInput}
          placeholder="Your course goal!"
        />
        <View style={buttonContainer}>
          <Button title="ADD GOAL" onPress={handleSubmit} />
          <Button title="CANCEL" onPress={handleModalOnOff} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const { inputContainer, textInput, buttonContainer } = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#5c0acc",
    justifyContent: "center",
    rowGap: 10,
    alignItems: "center",
    borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
    paddingBottom: 24,
    marginBottom: 24,
  },
  textInput: {
    width: "70%",
    height: 40,
    padding: 8,
    borderWidth: 1,
   
    borderColor: "#cccc",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
