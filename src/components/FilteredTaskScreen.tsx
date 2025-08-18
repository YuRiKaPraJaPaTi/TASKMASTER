import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { Task } from '../navigation/types';
import TaskList from '../screens/BottomTab/Home/components/TaskList';

type FilteredTaskScreenProps = {
      navigation: any;
      filterFunction: (task: Task) => boolean;
}

const FilteredTaskScreen = ({navigation, filterFunction}:FilteredTaskScreenProps) => {
      const tasks = useAppSelector((state) => state.tasks.tasks)
      const filteredTasks = tasks.filter(filterFunction)

      const handlePressDetails = (task: Task) => {
            navigation.navigate('DetailsTask', { task });
      };

  return (
    <View>
       <TaskList tasks={filteredTasks} onPressDetails={()=>handlePressDetails} />
    </View>
  )
}

export default FilteredTaskScreen

const styles = StyleSheet.create({})