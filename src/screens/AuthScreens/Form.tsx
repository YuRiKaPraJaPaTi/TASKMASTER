import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import InputText from '../../components/InputText';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { onGoogleButtonPress } from '../../Services/Google/GoogleSignInService';

// Type for Form Values
interface FormProps {
  title: string;
  buttonLabel: string;
  showUsernameField?: boolean;
  onSubmit: (form: FormValues) => void;
  onToggleForm: () => void;
  loading?: boolean;
  externalErrors?: {
    email?: string;
    password?: string;
    username?: string;
  };
 
}

export interface FormValues {
  username?: string;
  email: string;
  password: string;
  
}

const Form = ({ title, buttonLabel, showUsernameField, onSubmit, onToggleForm, loading, externalErrors}: FormProps) => {
  const [form, setForm] = useState<FormValues>({ email: '', password: '', username: '' });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
   const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null); 

 
  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Handle email validation
  const handleEmailChange = (email: string) => {
    setForm({ ...form, email });

     if (externalErrors?.email) externalErrors.email = undefined;
    
     if (!email) {
      setEmailError(null);
      setEmailValid(true);
    } else {
      // Validate the email format
      const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailFormat.test(email)) {
        setEmailValid(false);
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailValid(true);
        setEmailError(null);
      }
      }
  };

   // Handle password validation
  const handlePasswordChange = (password: string) => {
    setForm({ ...form, password });

    if (externalErrors?.password) externalErrors.password = undefined;

    if (!password) {
      setPasswordError(null);
      setPasswordValid(true);
    } else {
      // Validate the password length
      if (password.length < 6) {
        setPasswordValid(false);
        setPasswordError('Password must be at least 6 characters.');
      } else {
        setPasswordValid(true);
        setPasswordError(null);
      }
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (emailValid && passwordValid) {
      onSubmit(form);
    }
     };

     const handleGoogleLogin = async () => {
    try {
      const userCredential = await onGoogleButtonPress();
      Alert.alert('Login Success', `Welcome ${userCredential.user.displayName}`);
      // Navigate to main app here
    } catch (error) {
      Alert.alert('Login Failed');
    }
  };


  return (
    <View style={styles.container}>
      
        <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={60}>
          <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>{title === 'Login' ? 'Welcome' : 'Create Account'}</Text>

            

            {showUsernameField && (
              <InputText
                placeholder="Username"
                iconSource={require('../../../assets/username.png')}
                value={form.username!}
                onChangeText={(text) => setForm({ ...form, username: text })}
                style={[styles.input, externalErrors?.username && styles.errorBorder]}
              />
            )}

            

            <InputText
              iconSource={require('../../../assets/email.png')}
              placeholder="email"
              value={form.email}
              onChangeText={handleEmailChange}
              style={[styles.input, (!emailValid || externalErrors?.email) && styles.errorBorder]}
            />
            {(!emailValid || externalErrors?.email) && (
            <Text style={styles.errorText}>{externalErrors?.email || emailError}</Text>
            )}

            <InputText
              iconSource={require('../../../assets/password.png')}
              placeholder="password"
              value={form.password}
              onChangeText={handlePasswordChange}
              secureTextEntry={!isPasswordVisible}
              onIconPress={togglePasswordVisibility}
              style={[styles.input, (!passwordValid || externalErrors?.password) && styles.errorBorder]}
            />
            {(!passwordValid || externalErrors?.password) && (
                  <Text style={styles.errorText}>{externalErrors?.password || passwordError}</Text>
            )}

            

            <Text style={styles.forgotPassword}>Forgot Password?</Text>


            <TouchableOpacity style={styles.button} onPress={handleSubmit} >
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={styles.text}>{buttonLabel}</Text>
              )}
            </TouchableOpacity>

            <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>OR</Text>

            <View style={styles.images}>
              
              <TouchableOpacity style={styles.buttonBox}
              onPress={() => handleGoogleLogin().then(() => console.log('Signed in with Google!'))}
              >
                <Icon name="google" size={20} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>Sign up with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonBox}>
                <Icon name="facebook" size={20} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>Sign up with Facebook</Text>
              </TouchableOpacity>
                      
              
            </View>

            <Text style={styles.signUp}>
              {title === 'Login' ? "Don't have an account? " : "Already have an account? "}
              <Text style={styles.signUpLink} onPress={onToggleForm}>
                {title === 'Login' ? 'Sign Up' : 'Login'}
              </Text>
            </Text>
          </ScrollView>
        </KeyboardAvoidingView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    // borderRadius: 20,
    marginBottom: 20,
    shadowColor: 'purple',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  scrollContainer: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 44,
    // color: 'black',
    marginBottom: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(82, 63, 205, 0.8)', // light semi-transparent white
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  
  },
  signUp: {
    fontSize: 24,
    color: '#000',
    marginBottom: 30,
  },
  signUpLink: {
    color: '#4267B2',
    textDecorationLine: 'underline',
  },
  forgotPassword: {
    color: '#4267B2',
    fontSize: 16
  },
  button: {
    marginVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4267B2',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  images: {
    marginVertical: 24,
    display: 'flex',
    // flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  buttonBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4267B2',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default Form;
