import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAZjuwXPQJgQtTybmUmcC55A5d_fSpi9CQ",
    authDomain: "crown-clothing-web-app.firebaseapp.com",
    projectId: "crown-clothing-web-app",
    storageBucket: "crown-clothing-web-app.appspot.com",
    messagingSenderId: "392031906979",
    appId: "1:392031906979:web:3d71001622a9dfaabe6316"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalINformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {

            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalINformation
            });

        } catch (error) {
            console.log('error Created by User', error.message)
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };


  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  };

  

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//     if (!email || !password)return;

//     return await createAuthUserWithEmailAndPassword(auth, email, password)
// }