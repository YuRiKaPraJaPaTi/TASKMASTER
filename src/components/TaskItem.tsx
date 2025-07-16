import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Task } from '../navigation/types'
import SocialIcon from './SocialIcon'

interface TaskItemProps {
      task: Task;
      onPressDetails?: ()=>void;
      onDelete?: (id:number) => void;
}

const TaskItem = ({task, onPressDetails, onDelete }:TaskItemProps) => {
  return (
    <View style={styles.outerContainer}>
            <View style={styles.taskItem}>
            
            
                  <View style={styles.textContainer}>
                        <Text style={styles.title}>{task.title}</Text>
                        <Text style={styles.date}>{task.date}</Text>
                        <TouchableOpacity onPress={onPressDetails}>
                        <Text style={styles.viewDetailsText}>View Details</Text>
                  </TouchableOpacity>
                  </View>

                  <View style={styles.iconContainer}>
                        {/* <SocialIcon 
                              source={require('../../assets/edit.png')}
                              size={22}
                        /> */}
                        <SocialIcon 
                              source={require('../../assets/delete.png')}
                              size={22}
                              onPress={()=>onDelete?.(task.id)}
                              
                        />
                  </View>

                  
            
            </View>

            
      </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
      outerContainer: {
            padding: 10,
            // backgroundColor: 'rgba(0, 0, 0, 0.4)',
            gap: 5,
      },
      taskItem: {
            flexDirection: 'row',
            // backgroundColor: 'red',
            backgroundColor: 'rgba(166, 140, 140, 0.4)',
            padding: 15,
            borderRadius: 12,
            marginBottom: 10,
            
      },

      textContainer: {
            flex:1,
            // marginRight: 10,
            // backgroundColor: 'red',
      },

      title: { 
            fontSize: 24, 
            fontWeight: 'bold' 
      },
      date: { 
            fontSize: 16, 
            color: '#2d2828ff', 
            marginBottom: 5 

      },
      
      iconContainer: {
            flexDirection: 'row',
            gap:10,
            alignItems: 'center',
            // backgroundColor:'blue',
      },
      viewDetailsText: {
            color: '#1e90ff',
            textDecorationLine: 'underline',
            marginTop: 8,
            fontSize: 16,
},
})