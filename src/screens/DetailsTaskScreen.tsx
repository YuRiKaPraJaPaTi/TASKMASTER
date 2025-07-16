import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsTaskScreen = ({route}) => {
  const {task} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <Text style={styles.value}>{task.title}</Text>

      <Text style={styles.label}>Date:</Text>
      <Text style={styles.value}>{task.date}</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{task.description || 'No description'}</Text>
      
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
})