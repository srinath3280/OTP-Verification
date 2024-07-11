import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBRSbxFE0XOo13mC0ZhR61KJoyL9db983w",
  authDomain: "otp-verification-3a613.firebaseapp.com",
  projectId: "otp-verification-3a613",
  storageBucket: "otp-verification-3a613.appspot.com",
  messagingSenderId: "354797504218",
  appId: "1:354797504218:web:39c9ed8cbbb636e55707e3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);