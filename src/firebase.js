import { initializeApp } from 'firebase/app';
import {getFirestore,collection,getDoc} from 'firebase/firestore/lite';
import {getAuth} from "firebase/auth";
//import {provider} from "../firebase";

import { GoogleAuthProvider } from "firebase/auth";

// Use your config values here.
const app=initializeApp({
    apiKey: "AIzaSyCXn_kX9X5dBtqrXVX3qadsSWjo6x1bx0I",
    measurementId: "G-BC8BK77FSQ",
     messagingSenderId: "795314593363",
        authDomain: "hotstar-clone-fdd7b.firebaseapp.com",
        projectId: "hotstar-clone-fdd7b",
        storageBucket: "hotstar-clone-fdd7b.appspot.com",
        appId: "1:795314593363:web:74eb63dbf01be543bb30a6",
        
});


 const db = getFirestore(app);
 export {db}

export const provider = new GoogleAuthProvider();
export {app}
 export const auth= getAuth(app);
