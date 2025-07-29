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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { loadTasksFromFirestore } from './src/redux/middleware/todoThunks';



function Mainapp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks)
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const userId = user?.uid;


// useEffect(() => {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const userId = user?.uid;

//   if (userId) {
//     dispatch(loadTasksFromFirestore(userId));
//   }
// }, []);



  // useEffect(() => {
  //   const loadTasks = async () => {
  //     const savedTasks = await getTasksFromStorage();
  //     dispatch (setTasks(savedTasks))
  //   }

  //   loadTasks()
  // }, [dispatch])

  

  // useEffect(() => {
  //   storeTaskToStorage(tasks);
  // }, [tasks]);

   useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), user => {
      setIsLoggedIn(!!user);
      if (initializing) setInitializing(false);
    });

    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  
  return (
   
      
    <GestureHandlerRootView style={{flex:1}}>

      <NavigationContainer>
        {/* <DrawerNavigation /> */}
        {/* <AppNavigator /> */}
        
         {isLoggedIn ? (
          <AppNavigator />
          ) : (
          <AuthStack onLogin={() => setIsLoggedIn(true)} />
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Mainapp;
