import { Pressable, StyleSheet, Text,  } from 'react-native'
import React from 'react'

const PrimaryButton = ({handleCustomPress,text}) => {
  return (
    <Pressable style={customPress} onPress={handleCustomPress}>
      <Text style={btnText}>{text}1</Text>
    </Pressable>
  );
}

export default PrimaryButton

const { customPress, btnText } = StyleSheet.create({
  customPress: {
  },
  btnText: {
  },
});