import { StyleSheet,  TextInput, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
  return (
    <View style={startGameWrapper}>
      <TextInput />
      <View style={btnContainer}>
        <PrimaryButton handleCustomPress={() => {}} text="RESET" />
        <PrimaryButton handleCustomPress={() => {}} text="Submit" />
      </View>
    </View>
  );
}

export default StartGameScreen

const {startGameWrapper,btnContainer} = StyleSheet.create({
    startGameWrapper:{
        paddingTop:60,
        borderWidth:1,

    },
    btnContainer:{
        paddingHorizontal:20,
        borderRadius:8,
        padding:16,
        backgroundColor:"#72063c",
        flexDirection:"row",
        columnGap:15,
    }

})