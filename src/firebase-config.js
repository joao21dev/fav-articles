// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrfI6BTnF5hBVK79rPwCD-ZlkFJdx1mfA',
  authDomain: 'fav-article.firebaseapp.com',
  projectId: 'fav-article',
  storageBucket: 'fav-article.appspot.com',
  messagingSenderId: '385100162708',
  appId: '1:385100162708:web:9e7d280b01fb6760f7f681',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
