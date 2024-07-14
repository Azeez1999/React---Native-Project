import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth"; 
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyAMrVg0ydfZZNw_L69TJX9pHNHg8wVCQ44",
    authDomain: "react-native-auth-demo-42ca2.firebaseapp.com",
    projectId: "react-native-auth-demo-42ca2",
    storageBucket: "react-native-auth-demo-42ca2.appspot.com",
    messagingSenderId: "533068809948",
    appId: "1:533068809948:web:bc39137237c274fbdb1619"
};

let auth;
if (getApps().length === 0) {
    const app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });
} else {
    auth = getAuth();
}

export default auth;