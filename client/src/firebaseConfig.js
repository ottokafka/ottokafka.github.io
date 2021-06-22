import firebase  from 'firebase';

const firebaseKeys = {
    apiKey: "AIzaSyBMS2qXIAq9Pyzzk_2HsWDT2yfuo-X44rw",
    authDomain: "firestore-5209c.firebaseapp.com",
    projectId: "firestore-5209c",
    storageBucket: "firestore-5209c.appspot.com",
    messagingSenderId: "722361634028",
    appId: "1:722361634028:web:da61bcfeaf0e3ac80fe9c9"
  };

  const firebaseApp = firebase.initializeApp(firebaseKeys);
 const db = firebase.firestore(firebaseApp);

 

 export default db;