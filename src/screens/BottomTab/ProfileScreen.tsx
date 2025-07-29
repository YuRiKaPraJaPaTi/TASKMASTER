import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const ProfileScreen = () => {
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
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Form Section */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={{fontSize: 24, textAlign: 'center'}}>Profile View</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Enter Name"
          style={styles.input}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          placeholder="Enter Phone"
          keyboardType="phone-pad"
          style={styles.input}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          placeholder="Enter Address"
          style={styles.input}
        />

        <TouchableOpacity style={styles.saveButton}>
      <Text style={styles.saveButtonText}>Save Profile</Text>
    </TouchableOpacity>
      </ScrollView>
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
    paddingVertical: 30, // Add more padding for a better look
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5, // Add shadow for the navbar
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
  disabled: {
    backgroundColor: '#eee',
    color: '#777',
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
