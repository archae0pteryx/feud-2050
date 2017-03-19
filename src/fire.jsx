import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyA5jTxM2k_oRwgioSaCm1twwgotoGU686A",
    authDomain: "ff2050-45dca.firebaseapp.com",
    databaseURL: "https://ff2050-45dca.firebaseio.com",
    storageBucket: "ff2050-45dca.appspot.com",
    messagingSenderId: "171386322870"
}
const fb = firebase.initializeApp(config)
export const db = fb.database()