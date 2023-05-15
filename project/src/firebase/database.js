import {initializeApp}from "firebase/app";
import {getFirestore,serverTimestamp,collection,addDoc, getDocs,query,where,doc,deleteDoc}from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail,signInWithEmailAndPassword,updateEmail} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCcfBVoWOxgPGz4bDO3WR6U1Qr1XC8rWAg",
    authDomain: "cardiomyopathy-40cda.firebaseapp.com",
    projectId: "cardiomyopathy-40cda",
    storageBucket: "cardiomyopathy-40cda.appspot.com",
    messagingSenderId: "437594965576",
    appId: "1:437594965576:web:5f5dbaf1f64fe7ed8eba7d"
  };
  const app=initializeApp(firebaseConfig);
  const firebaseAuth=getAuth(app);
  const firebaseStore=getFirestore();
  export {app,firebaseAuth,firebaseStore,serverTimestamp,collection,addDoc,createUserWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail,
    signInWithEmailAndPassword,getDocs,query,where,doc,getAuth,deleteDoc,updateEmail};