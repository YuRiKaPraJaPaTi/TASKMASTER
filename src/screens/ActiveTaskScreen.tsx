import { StyleSheet} from 'react-native'
import React from 'react'
import { HistoryTabScreenProps } from '../navigation/types';
import FilteredTaskScreen from '../components/FilteredTaskScreen';

const ActiveTaskScreen = ({navigation}:HistoryTabScreenProps<'Active'>) => {
  
  return (
      <FilteredTaskScreen navigation={navigation} filterFunction={(task) => !task.isChecked}/>
  )
}

export default ActiveTaskScreen

const styles = StyleSheet.create({})