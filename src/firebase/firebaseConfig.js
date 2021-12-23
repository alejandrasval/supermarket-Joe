import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAbZ2xQkYVIQ9Mv4KGB7uwWs5bD9VolRI0",
    authDomain: "supermarket-ad43e.firebaseapp.com",
    projectId: "supermarket-ad43e",
    storageBucket: "supermarket-ad43e.appspot.com",
    messagingSenderId: "7847508734",
    appId: "1:7847508734:web:caff358f1d86d762d903af",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
