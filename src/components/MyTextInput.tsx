import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native';

type TextInputProps = {
      label: string;
      value?: string;
      onChangeText?: (text:string)=>void;
}

const MyTextInput = ({label, value, onChangeText}:TextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labels}>{label}</Text>
      <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            value={value}
            onChangeText={onChangeText}
            />
      </View>
    </View>
  )
}

export default MyTextInput

const styles = StyleSheet.create({
      container: {
            // backgroundColor: 'blue',
            paddingHorizontal: 30,
      },
      labels: {
            fontSize:16,
            color:'red',
            paddingBottom: 5,
            alignSelf: 'center',
      },
      inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: 50,
            backgroundColor: '#f1f1f1',
            // borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 10,
            marginBottom: 20,
            shadowColor: 'purple',
            shadowOffset: { width: 8, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 5,
      },
      
      input: {
            flex: 1,
            // borderWidth: 1,
            // borderColor: 'red',
            borderRadius: 5,
            // padding: 10,
      
      


      }
})