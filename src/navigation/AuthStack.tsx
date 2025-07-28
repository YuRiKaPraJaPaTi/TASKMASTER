// AuthStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { AuthStackParamList } from './types';
import WelcomeScreen from '../screens/WelcomeScreen';




const Auth = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack({ onLogin }: { onLogin: () => void }) {
  return (
    <Auth.Navigator>
      <Auth.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
      <Auth.Screen name="Login" options={{headerShown: false}}>
            {props => <LoginScreen {...props} onLogin={onLogin} />}
      </Auth.Screen>
      <Auth.Screen name="Signup" component={SignupScreen} options={{headerShown: false}}/>
    </Auth.Navigator>
  );
}
