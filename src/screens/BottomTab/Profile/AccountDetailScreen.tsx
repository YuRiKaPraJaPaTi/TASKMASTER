import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import { fetchUserProfile, getUserProfile, saveUserProfile } from '../../../Database/FirestoreDB';
import { ScrollView } from 'react-native-gesture-handler';

const AccountDetailScreen = () => {
      const user = auth().currentUser;
      const userId = user?.uid ?? '';
      const email = user?.email ?? 'No Email';
      

      const [form, setForm] = useState({
          name: '',
          phone: '',
          address: '',
          email: email, // Not editable
      });

      useEffect(() => {
            const loadProfile = async () => {
                  const profile = await fetchUserProfile(userId, email);
                  setForm(profile);
            };
      if (userId) loadProfile();
      }, [userId]);


      const handleChange = (field: keyof typeof form, value: string) => {
            setForm(prev => ({ ...prev, [field]: value }));
      };

      const handleSave = async () => {
            const { name, phone, address } = form;
            if (!name || !phone || !address) {
                  Alert.alert('Please fill in all fields');
                  return;
            }
            await saveUserProfile(userId, form);
            Alert.alert('Profile saved successfully');
      };

      return (
            <View>
                  <ScrollView contentContainerStyle={styles.formContainer}>
                        <Text style={{fontSize: 24, textAlign: 'center'}}>Profile View</Text>
                  
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                        placeholder="Enter Name"
                        value={form.name}
                        onChangeText={(text) => handleChange('name', text)}
                        style={styles.input}
                        />
            
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                        placeholder="Enter Phone"
                        value={form.phone}
                        onChangeText={(text) => handleChange('phone', text)}
                        keyboardType="phone-pad"
                        style={styles.input}
                        />
            
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                        placeholder="Enter Address"
                        value={form.address}
                        onChangeText={(text) => handleChange('address', text)}
                        style={styles.input}
                        />
            
                        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveButtonText}>Save Profile</Text>
                        </TouchableOpacity>
                  </ScrollView>
            </View>
      )
}

export default AccountDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 

 
  formContainer: {
  padding: 20,
  backgroundColor: '#fff',
  flexGrow: 1,
  },

  emailText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mainContent: {
    fontSize: 18,
    color: '#333',
  },
    containers: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#4267B2',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 24,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
