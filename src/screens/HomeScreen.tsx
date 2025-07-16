import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {
  return (
    <View >
      <Text>Welcome</Text>
      <Button
      title="Lets Go"
      onPress={() =>
        navigation.navigate('Todo')
      }
    />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
      
})