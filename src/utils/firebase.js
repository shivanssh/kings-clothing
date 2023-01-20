import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBjjcmD6qYpn8fciepiFDYadH_V-CllcFg',
  authDomain: 'kings-clothing-db-ed877.firebaseapp.com',
  databaseURL: 'https://kings-clothing-db-ed877-default-rtdb.firebaseio.com',
  projectId: 'kings-clothing-db-ed877',
  storageBucket: 'kings-clothing-db-ed877.appspot.com',
  messagingSenderId: '530677101915',
  appId: '1:530677101915:web:7304605de2f3b3710a967e',
  measurementId: 'G-8BFS6Z4VLV',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // const users = collection(db, 'users');
  const userRef = doc(db, 'users', userAuth?.uid);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating users', error);
    }
  }
  return snapShot;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
