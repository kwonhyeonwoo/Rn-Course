import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet,  View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);
  const handleChange = (e)=>{
    console.log('change',e.target)
    setText(e)
  };

  const handleSubmit = ()=>{
    setLists((prev)=>[
      ...prev,
      {text:text, id:Math.random().toString()},
    ])
    handleModalOnOff();
  }
  const handleModalOnOff = ()=>{
    setIsModalOpen((prev)=>!prev);
  }
  const handleItemDelete = (id)=>{
    setLists((prev)=>prev.filter((item)=>item.id !== id))
  };
  return (
      <View style={container}>
        <Button onPress={handleModalOnOff} title="Show ADD" />
        <GoalInput
          isModalOpen={isModalOpen}
          handleModalOnOff={handleModalOnOff}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <View style={golasContainer}>
          <FlatList
            data={lists}
            renderItem={({ item: { text, id } }, index) => {
              return (
                <GoalItem
                  text={text}
                  id={id}
                  handleItemDelete={handleItemDelete}
                />
              );
            }}
            keyExtractor={(item, idx) => {
              return item.id;
            }}
          />
        </View>
      </View>
  );
}

const {container,golasContainer,} = StyleSheet.create({
   container:{
      flex:1,
      paddingTop:100,
      paddingHorizontal:20,
    },
    golasContainer:{
      flex:3,
      paddingBottom:40,
    },
    
});
