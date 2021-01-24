import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA7TfhrYRjWVBOuuNTci0QCnN7D7IohGys",
    authDomain: "chattzzy.firebaseapp.com",
    projectId: "chattzzy",
    storageBucket: "chattzzy.appspot.com",
    messagingSenderId: "1083380839725",
    appId: "1:1083380839725:web:47115bf3893c3bdbcfcfa4",
    measurementId: "G-0DZLGVN2LB"
}

const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
export const firestore = app.firestore()
export const { GoogleAuthProvider } = firebase.auth
export const { serverTimestamp } = firebase.firestore.FieldValue