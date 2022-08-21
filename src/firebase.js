import firebase from "firebase"

const firebaseConfig = {
    apiKey: 'AIzaSyBdBv3YH4TKPUUtvG3T3VD_tz4igYHBk4s',
    authDomain: 'fundonotes-d4273.firebaseapp.com',
    databaseURL: 'https://fundonotes-d4273-default-rtdb.firebaseio.com/',
    projectId: 'fundonotes-d4273',
    messagingSenderId: '383232665932',
    storageBucket: 'fundonotes-d4273.appspot.com',
    appId: '1:383232665932:android:fa677d230dfc3142b507e9'
}

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase