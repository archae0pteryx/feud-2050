import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyC3IlHRTT8zp8-hsrEoB7egWw7KAi9Q7bs",
  authDomain: "family-feud-2050.firebaseapp.com",
  databaseURL: "https://family-feud-2050.firebaseio.com",
  storageBucket: "family-feud-2050.appspot.com",
  messagingSenderId: "943487803260"
}
const fb = firebase.initializeApp(config)
export const db = fb.database()