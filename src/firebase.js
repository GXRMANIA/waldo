// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const start = (async () => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyDdsWZJedi8Ae1hV9DSoHGff1vGc8OVIO0",
    authDomain: "waldo-956b8.firebaseapp.com",
    projectId: "waldo-956b8",
    storageBucket: "waldo-956b8.appspot.com",
    messagingSenderId: "515991564947",
    appId: "1:515991564947:web:bdec60d90b63560c8b5366"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "waldosPos"));
    let data = {}
    querySnapshot.forEach(doc => {
        data = {
            startX : doc.data().startX,
            startY : doc.data().startY,
            endX : doc.data().endX,
            endY : doc.data().endY,
        }
    })
    return data;
});

export default start;