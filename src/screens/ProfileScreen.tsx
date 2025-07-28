import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import auth, { getAuth, signOut } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const ProfileScreen = () => {
  const user = auth().currentUser;
  const email = user?.email ?? 'No Email';
  const initial = email.charAt(0).toUpperCase();

  const handleLogout = async () => {
    // signOut(getAuth()).then(() => console.log('User signed out!'));
      try {
         
        await auth().signOut();   
        await GoogleSignin.revokeAccess(); 
        // await GoogleSignin.signOut();   
      }catch (error) {
      console.error('Error signing out:', error);
    }
  
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>

      <Text style={styles.emailText}>{email}</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatarText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 18,
    marginBottom: 40,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
})