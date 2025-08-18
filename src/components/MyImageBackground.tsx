import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const MyImageBackground = ({source, children}:{source:any, children:any}) => {
  return (
    <ImageBackground
      source={source}
      style={styles.background}
      resizeMode='cover'
    >
      {children}
    </ImageBackground>
  )
}

export default MyImageBackground

const styles = StyleSheet.create({
      background: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      }
})