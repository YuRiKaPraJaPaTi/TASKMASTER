/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './src/navigation/AppNavigatior';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './src/redux/hooks';
import { setTasks } from './src/redux/todoSlice';
import { getTasksFromStorage, storeTaskToStorage } from './src/redux/storage';
import { RootState } from './src/redux/store';



function Mainapp() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks)

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await getTasksFromStorage();
      dispatch (setTasks(savedTasks))
    }

    loadTasks()
  }, [dispatch])

  useEffect(() => {
    storeTaskToStorage(tasks);
  }, [tasks]);

  
  return (
   
      <DrawerNavigation />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Mainapp;
