import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TodoScreen from '../screens/TodoScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from './types'
import HistoryScreen from '../screens/CompletedTaskScreen'
import MyTabBar from '../navigation/MyTabBar'
import TopHistoryTabNavigation from './TopHistoryTabNavigation'





const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            animation: 'fade',
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Todo" component={TodoScreen} options={{ headerShown: false, title:'Home' }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="History" component={TopHistoryTabNavigation} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
      tabBar: {
            backgroundColor: '#fff',
            height: 60,
            elevation: 20, 
            shadowColor: 'skyblue', 
            shadowOffset: { width: 1, height: 5 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
      },
      tabContainer: {
            flexDirection: 'row',
            height: 60,
            backgroundColor: '#eee',
            borderTopWidth: 1,
            borderTopColor: '#ccc',
      },
      tabBox: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ddd',
      },
      activeTabBox: {
            backgroundColor: '#4A90E2', 
      },
      tabLabel: {
            color: '#555',
            fontSize: 14,
      },
      activeLabel: {
            color: '#fff',
            fontWeight: 'bold',
      },

})



