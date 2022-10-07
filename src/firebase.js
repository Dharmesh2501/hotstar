// import firebase from "firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyCXn_kX9X5dBtqrXVX3qadsSWjo6x1bx0I",
//     authDomain: "hotstar-clone-fdd7b.firebaseapp.com",
//     projectId: "hotstar-clone-fdd7b",
//     storageBucket: "hotstar-clone-fdd7b.appspot.com",
//     messagingSenderId: "795314593363",
//     appId: "1:795314593363:web:74eb63dbf01be543bb30a6",
//     measurementId: "G-BC8BK77FSQ"
//   };

// //   // Initialize Firebase
//    const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyCXn_kX9X5dBtqrXVX3qadsSWjo6x1bx0I",
//     authDomain: "hotstar-clone-fdd7b.firebaseapp.com",
//     projectId: "hotstar-clone-fdd7b",
//     storageBucket: "hotstar-clone-fdd7b.appspot.com",
//     messagingSenderId: "795314593363",
//     appId: "1:795314593363:web:74eb63dbf01be543bb30a6",
//     measurementId: "G-BC8BK77FSQ"
//   });
//    const db=firebaseApp.firestore();    
//    const auth = firebase.auth();
//    const provider =  firebase.auth.GoogleAuthProvider();
//    const storage = firebase.storage();
// //    const analytics = getAnalytics(app);

// export { auth, provider, storage};
// export default db;

// import fire from 'firebase'

import { initializeApp } from 'firebase/app';
import {getFirestore,collection,getDoc} from 'firebase/firestore/lite';
import {getAuth} from "firebase/auth";
//import {provider} from "../firebase";

import { GoogleAuthProvider } from "firebase/auth";

// Use your config values here.
const app=initializeApp({
    apiKey: "AIzaSyCXn_kX9X5dBtqrXVX3qadsSWjo6x1bx0I",
        authDomain: "hotstar-clone-fdd7b.firebaseapp.com",
        projectId: "hotstar-clone-fdd7b",
        storageBucket: "hotstar-clone-fdd7b.appspot.com",
        messagingSenderId: "795314593363",
        appId: "1:795314593363:web:74eb63dbf01be543bb30a6",
        measurementId: "G-BC8BK77FSQ"
});


 const db = getFirestore(app);
 export {db}

export const provider = new GoogleAuthProvider();
export {app}
 export const auth= getAuth(app);
