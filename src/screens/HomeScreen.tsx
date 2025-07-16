import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Task } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


const HomeScreen = ({navigation}:Props) => {
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