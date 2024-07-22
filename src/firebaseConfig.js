import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD232PGe-OSTeoaYfvatOXVLUHN5doMxk8",
    authDomain: "patrones-ab06e.firebaseapp.com",
    projectId: "patrones-ab06e",
    storageBucket: "patrones-ab06e.appspot.com",
    messagingSenderId: "970433862252",
    appId: "1:970433862252:web:8c7fc92f1d2899990f1649",
    measurementId: "G-1Z1JMHPG1N"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
