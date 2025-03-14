import { Pressable, StyleSheet, Text,  } from 'react-native'
import React from 'react'
import Colors from '../utils/colors';

const PrimaryButton = ({handleCustomPress,text}) => {
  return (
    <Pressable style={customPress} onPress={handleCustomPress}>
      <Text style={btnText}>{text}</Text>
    </Pressable>
  );
}

export default PrimaryButton

const { customPress, btnText } = StyleSheet.create({
  customPress: {
    flex:1,
    paddingVertical:2,
    paddingHorizontal:5,
    height:30,
    backgroundColor:Colors.primary600,
    borderRadius:6,
    justifyContent:"center",
    alignItems:"center",
  },
  btnText: {
    color:"white",
    fontWeight:"bold"
  },
});