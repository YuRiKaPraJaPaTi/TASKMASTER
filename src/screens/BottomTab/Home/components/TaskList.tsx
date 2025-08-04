import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Task } from '../../../../navigation/types'
import TaskItem from './TaskItem'

type TaskListProps = {
      tasks: Task[];
      onPressDetails: (taskId: number) => void;
}

const TaskList = ({tasks, onPressDetails}:TaskListProps) => {
  return (
    <View>
            <FlatList
                  data={tasks}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                  <TaskItem task={item} onPressDetails={()=>onPressDetails(item.id)}
                  />
                  
                  )}
                  contentContainerStyle={{ paddingBottom: 100 }}
            />
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({})