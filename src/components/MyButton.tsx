import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Task } from '../navigation/types'

type ButtonProps = {
      label: string;
      onPress?: () => void;
}

const MyButton = ({label, onPress}: ButtonProps) => {
  return (
  
            <TouchableOpacity style={styles.mybutton} onPress={onPress}>
                  <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
   
  )
}

export default MyButton

const styles = StyleSheet.create({
      mybutton: {
            margin: 10,
            backgroundColor: 'purple',
            height: 50,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,

      },
      buttonText: {
            fontSize: 24,
            color: 'white',
      }
})