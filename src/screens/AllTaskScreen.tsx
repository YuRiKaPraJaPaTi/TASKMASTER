import { StyleSheet } from 'react-native'
import React from 'react'
import { HistoryTabScreenProps} from '../navigation/types'
import FilteredTaskScreen from '../components/FilteredTaskScreen'

const AllTaskScreen = ({navigation}:HistoryTabScreenProps<'All'>) => {
      
      return (
            
            <FilteredTaskScreen navigation={navigation} filterFunction={() => true} />
)}

export default AllTaskScreen

const styles = StyleSheet.create({})