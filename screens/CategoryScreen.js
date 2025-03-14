import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../assets/data/dummy-data'
import CategoryGridTitle from '../components/CategoryGridTitle'

const renderItem = ({item})=>{
    return (
        <CategoryGridTitle item={item}/>
    )
}

const CategoryScreen = () => {
  return (
    <SafeAreaView>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
        />
    </SafeAreaView>
  );
}

export default CategoryScreen

const styles = StyleSheet.create({
    listsContainer:{
    }
})