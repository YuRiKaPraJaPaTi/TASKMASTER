import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
      title="Go to Todo"
      onPress={() =>
        navigation.navigate('Todo', {name: 'Jane'})
      }
    />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})