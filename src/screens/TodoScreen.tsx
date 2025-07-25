import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import MyButton from '../components/MyButton';
import TaskList from '../components/TaskList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList, HomeTabScreenProps, RootStackParamList, Task } from '../navigation/types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { deleteTask } from '../redux/todoSlice';
import { BottomTabBarProps, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ReactNativeFirebase } from '@react-native-firebase/app';

// type Props = BottomTabScreenProps<TodoScreenProps, 'Todo'>;

const TodoScreen = ({navigation, route}:HomeTabScreenProps<'Todo'>) => {
      // const [tasks, setTasks] = useState<Task[]>([])
      // const dispatch = useAppDispatch();
      const tasks = useAppSelector(state => state.tasks.tasks)


      const handleAdd = () => {
            navigation.navigate('Add')
            // navigation.navigate('Add', {
            //       addTask: (newTask: Task) => {
            //       setTasks(prev => [newTask, ...prev]);
            //       },
            // });
      };

      const handleDetails = (task:Task) => {
            navigation.navigate('DetailsTask', {task});
      };

      return (
    <View style={styles.container}>
      
      <View style={styles.top}>
            <Text>To-do List</Text>
      </View>
      <View style={styles.bottom}>
            <View >
                  <Text style={styles.heading}>My Tasks</Text>
                  <TaskList tasks={tasks} onPressDetails={handleDetails} 
                  />
            </View>
            <TouchableOpacity
                  style={styles.fab}
                  onPress={handleAdd}
            >
                  <Image 
                        source={require('../../assets/plus.png')}
                        style={styles.fabIcon}
                  />
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
      container: {
            flex:1,
            // margin:20,
            // padding: 10,
            
      },
      top: {
            flex:1,
            backgroundColor: 'skyblue',
      },
      bottom: {
            flex:2,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            marginTop: -20,
            position: 'relative',
            padding: 20,
      },
      heading: {
            fontSize:32,
            fontWeight: 'bold',
            marginTop: 10,
      },
      fab: {
            width: 60,
            height: 60,
            position: 'absolute',
            backgroundColor: 'skyblue',
            justifyContent: 'center',
            alignItems: 'center',
            left: 300,
            bottom: 30,
            elevation: 5,
            shadowColor: 'black',
            shadowOffset: {width:5, height:5},
            shadowOpacity: 0.7,
            shadowRadius: 4,
      },
      fabIcon: {
            width: 24,
            height: 24,
      },
      task: {
            padding: 15,
            borderBottomWidth: 1,
            borderColor: '#ccc',
            marginBottom: 10,
      },



})