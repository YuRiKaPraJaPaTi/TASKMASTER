import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Task } from '../navigation/types';
import SocialIcon from '../components/SocialIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAppDispatch, useAppSelector} from '../redux/hooks';
import { deleteTask } from '../redux/todoSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailsTask'>;

const DetailsTaskScreen = ({navigation, route}:Props) => {
  const dispatch = useAppDispatch();
  const taskId = route.params.task.id;

  const task = useAppSelector((state) =>
    state.tasks.tasks.find((t) => t.id === taskId)
  );

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id))
    navigation.goBack()
  }

  const handleEdit = () => {
    if (task)
    navigation.navigate('Add', { taskToEdit: task });
  };

  return (
    <View style={styles.container}>

      <View style={styles.iconContainer}>
        
        <Icon name='edit' size={22} onPress={handleEdit}/>
        <SocialIcon 
          source={require('../../assets/delete.png')}
          size={22}
          onPress={()=>handleDelete(taskId)}
                                    
        />
      </View>

      <Text style={styles.label}>Title:</Text>
      <Text style={styles.value}>{task?.title}</Text>

      <Text style={styles.label}>Date:</Text>
      <Text style={styles.value}>{task?.date}</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{task?.description || 'No description'}</Text>

      
      
    </View>
  )
}

export default DetailsTaskScreen

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20
   },
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginTop: 20 
  },
  value: { 
    fontSize: 16, 
    marginTop: 5 
  },
  iconContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap:30,
            alignItems: 'center',
            // backgroundColor:'blue',
      },
})