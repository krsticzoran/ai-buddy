import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAlOk--pqjGzTXVpClGeOoRf9YwLoxkd1U',
  authDomain: 'ai-buddy-d160e.firebaseapp.com',
  databaseURL: 'https://ai-buddy-d160e-default-rtdb.firebaseio.com',
  projectId: 'ai-buddy-d160e',
  storageBucket: 'ai-buddy-d160e.appspot.com',
  messagingSenderId: '50637421188',
  appId: '1:50637421188:web:04d6f228dffcbf1fd620d1',
  measurementId: 'G-PQJ2PV4LN7',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
