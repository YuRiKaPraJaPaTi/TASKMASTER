import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoScreen = ({navigation, route}) => {
        return (
    <View>
      <Text>TodoScreen</Text>
      <Text>This is {route.params.name}'s Todo profile.</Text>;
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})