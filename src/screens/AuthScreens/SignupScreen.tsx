// screens/SignupScreen.tsx
import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import auth, { createUserWithEmailAndPassword, getAuth } from '@react-native-firebase/auth';
import Form, { FormValues } from './Form';
import { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

const SignupScreen = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string; username?: string }>({});

  const handleSignup = (form: FormValues) => {
    const { email, password, username } = form;

    const errors: typeof fieldErrors = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password min of 6 length required';
//     if (!username) errors.username = 'Username is required';

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    setFieldErrors({});

    createUserWithEmailAndPassword(getAuth(), email, password)
    .then(() => {
      Alert.alert('Account created successfully!');
      navigation.navigate('Login');
    })
    .catch((error) => {
      const errorMap: typeof fieldErrors = {};

      if (error.code === 'auth/email-already-in-use') {
        errorMap.email = 'This email is already in use.';
      } else if (error.code === 'auth/invalid-email') {
        errorMap.email = 'Invalid email address.';
      } else if (error.code === 'auth/weak-password') {
        errorMap.password = 'Password must be at least 6 characters.';
      } else {
        Alert.alert(error.message || 'Signup failed');
      }

      setFieldErrors(errorMap);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  

  return (
    <Form
      title="Sign Up"
      buttonLabel="Create Account"
      showUsernameField
      onSubmit={handleSignup}
      onToggleForm={() => navigation.navigate('Login')}
      loading={loading}
      externalErrors={fieldErrors}
    />
  );
};

const styles = StyleSheet.create({});
export default SignupScreen;
