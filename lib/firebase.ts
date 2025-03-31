// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDIOorNbpoHLcnOFETTaa-gvirJ471XKA0",
    authDomain: "nextblog-62ca7.firebaseapp.com",
    projectId: "nextblog-62ca7",
    storageBucket: "nextblog-62ca7.firebasestorage.app",
    messagingSenderId: "306453544302",
    appId: "1:306453544302:web:0d275b3d21c44c2cf7d57f"
};

// 初始化Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };