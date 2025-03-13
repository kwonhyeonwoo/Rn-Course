import { ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const handleUserNumber = (number)=>{
    setUserNumber(number);
  };

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={wrapper}>
      <ImageBackground
        style={wrapper}
        imageStyle={{ opacity: 0.1 }}
        resizeMethod="cover"
        source={require("./assets/images/background.png")}
      >
        <SafeAreaView style={{flex:1}}>
          {userNumber ? (
            <GameScreen />
          ) : (
            <StartGameScreen handleUserNumber={handleUserNumber} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const {wrapper} = StyleSheet.create({
    wrapper:{
      flex:1,
    }
});
