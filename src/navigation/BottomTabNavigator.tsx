import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import TodoScreen from '../screens/TodoScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from './types'
import HistoryScreen from '../screens/CompletedTaskScreen'
import MyTabBar from '../navigation/MyTabBar'
import TopHistoryTabNavigation from './TopHistoryTabNavigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerHistoryNavigation from './DrawerHistoryNavigation'



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
      <Tab.Screen 
            name="Todo" 
            component={TodoScreen} 
            options={{  headerTitle:'',tabBarLabel:'Home', title:'Home',
                  headerShown: true ,
                  
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
      <Tab.Screen name="History" component={TopHistoryTabNavigation} options={{  headerShown: true }}/>
      <Tab.Screen name="Profile" component={DrawerHistoryNavigation} options={{ headerShown: true }}/>
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



