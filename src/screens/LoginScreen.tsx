// screens/LoginScreen.tsx
import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Form, { FormValues } from './Form';
import { AuthStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'> & {
  onLogin: () => void;
};

const LoginScreen = ({ navigation, onLogin }: Props) => {
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = (form: FormValues) => {
    const { email, password } = form;

    const errors: typeof fieldErrors = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    setFieldErrors({});

   auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        onLogin();
      })
      .catch((error) => {
        // Handle Firebase authentication errors
        const errorMap: typeof fieldErrors = {};

        switch (error.code) {
          case 'auth/user-not-found':
            errorMap.email = 'No account found with this email.';
            break;
          case 'auth/wrong-password':
            errorMap.password = 'Incorrect password.';
            break;
          case 'auth/invalid-email':
            errorMap.email = 'Invalid email address.';
            break;
          case 'auth/credential-already-associated':
            errorMap.email = 'This email is already associated with another account.';
            break;
          default:
            Alert.alert(error.message || 'Login failed');
            break;
        }

        setFieldErrors(errorMap);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form
      title="Login"
      buttonLabel="Log In"
      onSubmit={handleLogin}
      onToggleForm={() => navigation.navigate('Signup')}
      loading={loading}
      externalErrors={fieldErrors}
    />
  );
};

const styles = StyleSheet.create({});
export default LoginScreen;
