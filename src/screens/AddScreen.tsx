import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React from 'react'
import MyTextInput from '../components/MyTextInput'
import MyButton from '../components/MyButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Task } from '../navigation/types';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addTask, clearForm, updateForm, editTask } from '../redux/todoSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = NativeStackScreenProps<RootStackParamList, 'Add'>;

const AddScreen = ({navigation, route}:Props) => {
      const dispatch = useAppDispatch();

      const {title, description, date} = useSelector((state: RootState) => state.tasks.form)

      const form = useAppSelector(state => state.tasks.form);
      const { taskToEdit } = route.params || {}; 

      useEffect(() => {
            if (taskToEdit) {
                  dispatch(updateForm({ field: 'title', value: taskToEdit.title }));
                  dispatch(updateForm({ field: 'description', value: taskToEdit.description }));
                  dispatch(updateForm({ field: 'date', value: taskToEdit.date }));
            } else {
                  dispatch(clearForm());
            }
            }, [taskToEdit]);


      const handleSave = () => {
            if (form.title.trim() && form.date.trim()) {
            const task = {
                  id: taskToEdit?.id ?? Date.now(), 
                  title: form.title,
                  description: form.description,
                  date: form.date,
            };

            if (taskToEdit) {
                  dispatch(editTask(task));
            } else {
                  dispatch(addTask(task));
            }

            dispatch(clearForm());
            navigation.goBack();
            }
            };

      const handleCancel = () => {
            dispatch(clearForm())
            navigation.goBack()
      }


  return (
      <View style={styles.container}>
            <View style={{ justifyContent: 'flex-start', paddingHorizontal: 50, padding: 20 }}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='close' size={30} />
                  </TouchableOpacity>
            </View>
            <Text style={styles.heading}>{taskToEdit ? 'Edit Task' : 'Create Task'}</Text>
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