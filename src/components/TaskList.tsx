import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Task } from '../navigation/types'
import TaskItem from './TaskItem'

type TaskListProps = {
      tasks: Task[];
      onPressDetails: (task:Task) => void;
      onDelete: (id: number) => void;
}

const TaskList = ({tasks, onPressDetails, onDelete}:TaskListProps) => {
  return (
    <View>
            <FlatList
                  data={tasks}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                  <TaskItem task={item} onPressDetails={()=>onPressDetails(item)}
                  onDelete={onDelete}/>
                  
                  )}
            />
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({})