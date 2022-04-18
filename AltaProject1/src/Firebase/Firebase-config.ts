import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAYTm12rVxMK1bxLliynuKggHP93p0mdP0',
  authDomain: 'ticketproject-c023b.firebaseapp.com',
  projectId: 'ticketproject-c023b',
  storageBucket: 'ticketproject-c023b.appspot.com',
  messagingSenderId: '56837567920',
  appId: '1:56837567920:web:327e22c9c3af79c14d9275',
};

// init firebase app
export const app = initializeApp(firebaseConfig);

// init services app
export const db = getFirestore();

//collection reference
