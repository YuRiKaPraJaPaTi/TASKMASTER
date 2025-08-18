import { StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TopHistoryTabParamList } from './types'
import AllTaskScreen from '../screens/TopTab/AllTaskScreen'
import ActiveTaskScreen from '../screens/TopTab/ActiveTaskScreen'
import CompletedTaskScreen from '../screens/TopTab/CompletedTaskScreen'

const TopTab = createMaterialTopTabNavigator<TopHistoryTabParamList>();

const TopHistoryTabNavigation = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
            // tabBarStyle: {backgroundColor: 'powderblue'},
            // tabBarLabelStyle: {fontSize: 16}
            // // tabBarItemStyle: {width:100}
             tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIndicatorStyle: styles.tabIndicator,
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: '#333',
        tabBarPressColor: 'lightblue',
      }}
    >
      <TopTab.Screen name="All" component={AllTaskScreen}/>
      <TopTab.Screen name="Active" component={ActiveTaskScreen}/>
      <TopTab.Screen name="Completed" component={CompletedTaskScreen}/>
    </TopTab.Navigator>
  )
}

export default TopHistoryTabNavigation

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#F0F8FF',
    borderBottomWidth: 1,
    borderColor: '#4267B2',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  tabIndicator: {
    backgroundColor: '#4267B2',
    height: 4,
    borderRadius: 2,
  },
})