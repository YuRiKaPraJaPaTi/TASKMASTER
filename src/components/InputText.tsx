import { StyleSheet, TextInput, View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface props {
  iconSource?: any;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  onIconPress?: () => void;
  style?: object;
  hasError?: boolean;
}

const InputText = ({iconSource, placeholder, value, onChangeText, secureTextEntry, onIconPress, style, hasError}:props) => {
  return (
    <View style={[styles.inputContainer, style]}>
      {/* <Icon name = "mail-outline" size={25} style={styles.icon} /> */}
        <Image
          style={styles.icon}
          resizeMode="contain" 
          source={iconSource}
          />
          <TextInput  style={[styles.input]}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={secureTextEntry}
              
              
          />
                  
          {secureTextEntry !== undefined && (
            <TouchableOpacity onPress={onIconPress} >
              <Text >
                {secureTextEntry ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
      )}
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
    inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#f1f1f1',
    // borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowColor: 'purple',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
   icon: {
    marginRight: 10,
    height:30,
    width: 30,
  },

   input: {
    flex: 1,
    height: '100%',
    
  },
})