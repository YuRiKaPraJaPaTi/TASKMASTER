import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

type TextInputProps = {
      label: string;
      value?: string;
      onChangeText?: (text:string)=>void;
}

const MyTextInput = ({label, value, onChangeText}:TextInputProps) => {
      const [showPicker, setShowPicker] = useState(false);
      const [mode, setMode] = useState<'date' | 'time'>('date');
      const [tempDate, setTempDate] = useState<Date>(new Date());

      const openDatePicker = () => {
            setMode('date');
            setShowPicker(true);
      };

      const handleDateChange = (event: DateTimePickerEvent, selected?: Date) => {
            if (event.type === 'dismissed') {
                  setShowPicker(false);
                  return;
            }

            if (selected) {
                  if (mode === 'date') {
                        setTempDate(selected);
                        setMode('time');
                        setShowPicker(true);
                  } else {
                        setShowPicker(false);
                        const finalDate = new Date(
                        tempDate.getFullYear(),
                        tempDate.getMonth(),
                        tempDate.getDate(),
                        selected.getHours(),
                        selected.getMinutes()
                        );

                        // Format to 'YYYY-MM-DD HH:mm'
                        const yyyy = finalDate.getFullYear();
                        const mm = String(finalDate.getMonth() + 1).padStart(2, '0');
                        const dd = String(finalDate.getDate()).padStart(2, '0');
                        const hh = String(finalDate.getHours()).padStart(2, '0');
                        const min = String(finalDate.getMinutes()).padStart(2, '0');

                        const formatted = `${yyyy}-${mm}-${dd} ${hh}:${min}`;
                        onChangeText?.(formatted); //returns string
                  }
            }
      };

      return (
            <View style={styles.container}>
                  <Text style={styles.labels}>{label}</Text>
                  <View style={styles.inputContainer}>
                        {label.toLowerCase() === 'date' ? (
                              <TouchableOpacity style={{ flex: 1 }} onPress={openDatePicker}>
                                    <Text style={styles.dateText}>{value || 'Select Date'}</Text>
                              </TouchableOpacity>
                        ) : (
                              <TextInput 
                              style={styles.input} 
                              value={value}
                              onChangeText={onChangeText}
                              />
                         )}
                  </View>
                  {showPicker && (
                        <DateTimePicker
                        value={tempDate}
                        mode={mode} 
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={handleDateChange}
                        />
                        )
                  }

            </View>
      )
}

export default MyTextInput

const styles = StyleSheet.create({
      container: {
            // backgroundColor: 'blue',
            paddingHorizontal: 30,
      },
      labels: {
            fontSize:16,
            color:'white',
            paddingBottom: 5,
            alignSelf: 'center',
      },
      inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: 50,
            backgroundColor: '#f1f1f1',
            // borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 10,
            marginBottom: 20,
            shadowColor: 'purple',
            shadowOffset: { width: 8, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 5,
      },
      
      input: {
            flex: 1,
            // borderWidth: 1,
            // borderColor: 'red',
            borderRadius: 5,
            // padding: 10,
      },
      dateText: {
            paddingVertical: 13,
            paddingHorizontal: 10,
            color: '#333',
      },
})