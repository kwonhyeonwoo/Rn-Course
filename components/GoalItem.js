import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = ({ text, handleItemDelete, id,  }) => {
  return (
    <Pressable
      onPress={() => handleItemDelete(id)}
      style={({ pressed }) => pressed && pressedItem}
      android_ripple={{ color: "#21064" }}
    >
      <View style={goalsItem}>
        <Text style={golasText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const { goalsItem, golasText,pressedItem } = StyleSheet.create({
  goalsItem: {
    borderRadius: 6,
    backgroundColor: "#5c0acc",
    padding: 8,
    margin: 8,
  },
  pressedItem:{
    opacity:0.5
  },
  golasText: {
    color: "white",
  },
});
