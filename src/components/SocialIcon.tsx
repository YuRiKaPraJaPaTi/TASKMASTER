import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleProp } from 'react-native';
import { ImageStyle } from 'react-native';


type Props = {
  source: any; 
  onPress?: () => void;
  size?: number;
  style?: StyleProp<ImageStyle>
};

const SocialIcon = ({ source, onPress, size = 40, style }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View >
        <Image source={source} style={{ width: size, height: size }} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  )
}



export default SocialIcon

const styles = StyleSheet.create({
  
})