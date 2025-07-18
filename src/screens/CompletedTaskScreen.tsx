import { StyleSheet } from 'react-native'
import React from 'react'
import { HistoryTabScreenProps} from '../navigation/types'
import FilteredTaskScreen from '../components/FilteredTaskScreen'

const CompletedTaskScreen = ({navigation}:HistoryTabScreenProps<'Completed'>) => {

  return (
    <FilteredTaskScreen navigation={navigation} filterFunction={(task) => task.isChecked}/>
  )
}

export default CompletedTaskScreen

const styles = StyleSheet.create({})