import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyTextInput from '../components/MyTextInput'
import MyButton from '../components/MyButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Task } from '../navigation/types';
import { useAppDispatch } from '../redux/hooks'
import { addTask, clearForm, updateForm } from '../redux/todoSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

type Props = NativeStackScreenProps<RootStackParamList, 'Add'>;

const AddScreen = ({navigation, route}:Props) => {
      const dispatch = useAppDispatch();

      const {title, description, date} = useSelector((state: RootState) => state.tasks.form)

      const handleSave = () => {
            if (title.trim() && date.trim()) {
                  const newTask: Task = {
                        id: Date.now(),
                        title,
                        description,
                        date,
                  };
                  dispatch(addTask(newTask))
                  dispatch(clearForm())
                  navigation.goBack()
            }
            
      }

      const handleCancel = () => {
            dispatch(clearForm())
            navigation.goBack()
      }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Task</Text>
      <View style={styles.textInputContainer}>
            <MyTextInput label='title' value={title} onChangeText={(text)=>dispatch(updateForm({field: 'title', value: text}))}/>
            <MyTextInput label='description' value={description} onChangeText={(text)=>dispatch(updateForm({field: 'description', value: text}))}/>
            <MyTextInput label='Date' value={date} onChangeText={(text)=>dispatch(updateForm({field: 'date', value: text}))} />
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