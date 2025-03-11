import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);
  const handleChange = (e)=>{
    console.log('change',e.target)
    setText(e)
  };

  const handleSubmit = ()=>{
    setLists((prev)=>[
      ...prev,
      text,
    ])
  }
  return (
    <View style={container}>
      <View style={inputContainer}>
        <TextInput onChangeText={handleChange} style={textInput} placeholder='Your course goal!'/>
        <Button title='ADD GOAL' onPress={handleSubmit}/>
      </View>
      <View style={golasContainer}>
        {lists.map((item,idx)=>(
          <View key={idx} style={goalsItem}>
            <Text style={golasText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const {container,inputContainer,textInput,golasContainer,goalsItem,golasText} = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:100,
      paddingHorizontal:20,
    },
    inputContainer:{
      flexDirection:"row",
      justifyContent:'space-between',
      borderBottomWidth:1,
      borderBottomColor:"#cccc",
      paddingBottom:24,
      marginBottom:24,
    },
    textInput:{
      width:"70%",
      height:40,
      padding:8,
      borderWidth:1,
      borderColor:"#cccc",
      
    },
    golasContainer:{
      flex:3,
    },
    goalsItem:{
      borderRadius:6,
      backgroundColor:"#5c0acc",
      padding:8,
      margin:8,
    },
    golasText:{
      color:"white"
    }
});

// 520acc
