import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../redux/hooks'
import TaskList from '../components/TaskList'
import { HistoryTabScreenProps, Task, TopHistoryTabParamList } from '../navigation/types'

const AllTaskScreen = ({navigation}:HistoryTabScreenProps<'All'>) => {
      const tasks = useAppSelector((state) => state.tasks.tasks)
      const handlePressDetails = (task: Task) => {
            navigation.navigate('DetailsTask', { task: task });
      };
      return (
            <View>
                  <TaskList tasks={tasks} onPressDetails={handlePressDetails}  />
            </View>
      )
}

export default AllTaskScreen

const styles = StyleSheet.create({})