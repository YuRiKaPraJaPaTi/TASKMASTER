import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import TodoScreen from '../screens/BottomTab/Home/TodoScreen'
import ProfileScreen from '../screens/BottomTab/Profile/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from './types'
import HistoryScreen from '../screens/TopTab/CompletedTaskScreen'
import MyTabBar from '../navigation/MyTabBar'
import TopHistoryTabNavigation from './TopHistoryTabNavigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerHistoryNavigation from './DrawerNavigation'



const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen 
            name="Todo" 
            component={TodoScreen} 
            options={{  headerTitle:'',tabBarLabel:'Home', title:'Home',
                   headerStyle: {
                        backgroundColor: '#4267B2', 
                  },
                  headerShown: true,
                  headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 15 }}>
                        <Image
                        source={require("../../assets/profile.png")}
                        style={{ width: 36, height: 36, borderRadius: 18 }}
                        />
                        </TouchableOpacity>
                  ),
                  headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 15 }}>
                        <Icon name="bell" size={22} color="black" />
                        </TouchableOpacity>
                  ),
                  // tabBarIcon: ({ color, size }) => (
                  //       <Icon name="home" size={size} color={color} />
                  // ),
            }}
      />
      <Tab.Screen name="History" component={TopHistoryTabNavigation} options={{  headerShown: false }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({

})



