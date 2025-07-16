import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import MyTextInput from '../components/MyTextInput'
import { Task } from './TodoScreen'
import MyButton from '../components/MyButton'

const AddScreen = ({navigation, route}) => {
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')
      const [date, setDate] = useState('') 

      const handleSave = () => {
            if (title.trim() && date.trim()) {
                  const newTask: Task = {
                        id: Date.now(),
                        title,
                        description,
                        date,
                  };
                  route.params?.addTask?.(newTask);
                  navigation.goBack()
            }
            
      }

      const handleCancel = () => {
            navigation.goBack()
      }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Task</Text>
      <View style={styles.textInputContainer}>
            <MyTextInput label='title' value={title} onChangeText={setTitle}/>
            <MyTextInput label='description' value={description} onChangeText={setDescription}/>
            <MyTextInput label='Date' value={date} onChangeText={setDate} />
      </View>
      <View style={styles.buttonContainer}>
            <MyButton label='Save' onPress={handleSave}/>
            <MyButton label='Cancel'  onPress={handleCancel}/>
      </View>
    </View>
  )
}

export default AddScreen

const styles = StyleSheet.create({
      container: {
            flex:1,
            backgroundColor: 'skyblue',
      },
      heading: {
            fontSize: 32,
            alignSelf: 'center',
            padding: 10,
            // backgroundColor: 'green',
      },
      textInputContainer: {
            // backgroundColor: 'red',
            padding: 10,
      },
      buttonContainer: {
            flexDirection: 'row',
            alignSelf: 'center',
      }
}) 