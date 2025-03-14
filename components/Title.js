import { StyleSheet, Text,} from 'react-native'
import React from 'react'
import Colors from '../utils/colors'

const Title = ({title}) => {
  return (
      <Text style={styles.title}>{title}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 24,
    borderColor: "white",
    fontWeight:700,
    borderWidth: 1,
    textAlign: "center",
    padding: 10,
  },
});