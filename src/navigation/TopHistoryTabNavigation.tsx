import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs'
import { TopHistoryTabParamList } from './types'
import AllTaskScreen from '../screens/TopTab/AllTaskScreen'
import ActiveTaskScreen from '../screens/TopTab/ActiveTaskScreen'
import CompletedTaskScreen from '../screens/TopTab/CompletedTaskScreen'

const TopTab = createMaterialTopTabNavigator<TopHistoryTabParamList>();

const TopHistoryTabNavigation = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
            tabBarStyle: {backgroundColor: 'powderblue'},
            tabBarLabelStyle: {fontSize: 16}
            // tabBarItemStyle: {width:100}
      }}
    >
      <TopTab.Screen name="All" component={AllTaskScreen}/>
      <TopTab.Screen name="Active" component={ActiveTaskScreen}/>
      <TopTab.Screen name="Completed" component={CompletedTaskScreen}/>
    </TopTab.Navigator>
  )
}

export default TopHistoryTabNavigation

const styles = StyleSheet.create({})