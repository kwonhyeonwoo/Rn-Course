import { ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './utils/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const handleUserNumber = (number)=>{
    setUserNumber(number);
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={wrapper}
    >
      <ImageBackground
        style={wrapper}
        imageStyle={{ opacity: 0.1 }}
        resizeMethod="cover"
        source={require("./assets/images/background.png")}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {userNumber ? (
            <GameScreen userNumber={userNumber} />
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
