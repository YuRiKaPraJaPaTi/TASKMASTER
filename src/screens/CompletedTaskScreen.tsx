import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { Task } from '../navigation/types'
import TaskList from '../components/TaskList'

const CompletedTaskScreen = (navigation) => {
  const tasks = useAppSelector((state) => state.tasks.tasks)
  const ctasks = tasks.filter((task) => task.isChecked);

  const handlePressDetails = (task: Task) => {
    navigation.navigate('DetailsTask', { task: task });
  };
  return (
    <View>
      <TaskList tasks={ctasks} onPressDetails={handlePressDetails}  />
    </View>
  )
}

export default CompletedTaskScreen

const styles = StyleSheet.create({})