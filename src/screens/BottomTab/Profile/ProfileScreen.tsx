import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, ScrollView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { HomeTabScreenProps } from '../../../navigation/types';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation, route}:HomeTabScreenProps<'Profile'>) => {
  const user = auth().currentUser;
  const userId = user?.uid ?? '';
  const email = user?.email ?? 'No Email';
  const initial = email.charAt(0).toUpperCase();

  const handleLogout = async () => {
    try {
      await auth().signOut();
      await GoogleSignin.revokeAccess();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.navbar}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>
        <Text style={styles.emailText}>{email}</Text>
      </View>

        <View style={styles.optionContainer}>
                <View style={styles.option}>
                  <Icon name="moon" size={20} style={styles.icon} />
                  <Text style={styles.optionText}>Dark mode</Text>
                  {/* <Switch
                    value={isDarkMode}
                    onValueChange={setIsDarkMode}
                    style={styles.switch}
                  /> */}
                </View>
        
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AccountDetails')}>
                  <Icon name="person-outline" size={20} style={styles.icon} />
                  <Text style={styles.optionText}>Profile details</Text>
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.option}>
                  <Icon name="settings-outline" size={20} style={styles.icon} />
                  <Text style={styles.optionText}>Settings</Text>
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.option} onPress={handleLogout}>
                  <Icon name="log-out-outline" size={20} style={styles.icon} />
                  <Text style={styles.optionText}>Log out</Text>
                </TouchableOpacity>
              </View>
    </View>
  );
};

export default ProfileScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#4267B2',
    paddingVertical: 30, 
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5, 
  },

  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatarText: {
    color: '#4267B2',
    fontSize: 32,
    fontWeight: 'bold',
  },

  emailText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
  },
  optionContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 15,
    color: '#444',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
  },
  switch: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
});
