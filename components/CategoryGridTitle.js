import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryGridTitle = ({ item }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.pressableBtn,
          pressed ? styles.btnOpacity : null,
          {
            backgroundColor:item.color
          }
        ]}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnOpacity: {
    opacity: 0.5,
  },
  pressableBtn: {
    width: 150,
    height: 150,
    margin: 10,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    shadowColor: "black",
    borderRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
