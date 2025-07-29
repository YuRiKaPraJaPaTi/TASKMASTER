// import { GoogleAuthProvider, getAuth, signInWithCredential } from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '83705818489-jvso48hphfis79jbj0c7br34pspchbdc.apps.googleusercontent.com',
// });

// export async function onGoogleButtonPress() {
//   // Check if your device supports Google Play
//   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//   // Get the users ID token
//   const signInResult = await GoogleSignin.signIn();

//   // Try the new style of google-sign in result, from v13+ of that module
//   idToken = signInResult.data?.idToken;
//   if (!idToken) {
//     // if you are using older versions of google-signin, try old style result
//     idToken = signInResult.idToken;
//   }
//   if (!idToken) {
//     throw new Error('No ID token found');
//   }

//   // Create a Google credential with the token
//   const googleCredential = GoogleAuthProvider.credential(signInResult.data.idToken);

//   // Sign-in the user with the credential
//   return signInWithCredential(getAuth(), googleCredential);
// }


import { GoogleAuthProvider, getAuth, signInWithCredential } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Configure GoogleSignin in your app
GoogleSignin.configure({
  webClientId: '83705818489-jvso48hphfis79jbj0c7br34pspchbdc.apps.googleusercontent.com',
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
