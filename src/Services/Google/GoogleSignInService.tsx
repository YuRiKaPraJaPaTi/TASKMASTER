import { GoogleAuthProvider, getAuth, signInWithCredential } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { webClientId } from './constants';

// Configure GoogleSignin in your app
GoogleSignin.configure({
  webClientId: webClientId,
});

export async function onGoogleButtonPress() {
  try {
    // Check if your device supports Google Play services
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    // Get the user's ID token
    const signInResult = await GoogleSignin.signIn();

    // Get the ID token from the new style sign-in result (v13+)
    let idToken = signInResult.data?.idToken;
//      idToken  = signInResult;

    if (!idToken) {
      throw new Error('No ID token returned');
    }

    // Create a Google credential with the token
    const googleCredential = GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return signInWithCredential(getAuth(), googleCredential);
  } catch (error) {
    console.error("Google Sign-In Error: ", error);
    throw error;
  }
}
