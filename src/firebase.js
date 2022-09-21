// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc} from "firebase/firestore";

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

    const querySnapshot2 = await getDocs(collection(db, "kidPos"));
    let data2 = {}
    querySnapshot2.forEach(doc => {
        data2 = {
            startX : doc.data().startX,
            startY : doc.data().startY,
            endX : doc.data().endX,
            endY : doc.data().endY,
        }
    })

    

    async function getScoreboard() {
        const querySnapshot1 = await getDocs(collection(db, "users"));
        let data1 = []
        querySnapshot1.forEach(doc => {
            data1.push({
              name: doc.data().name,
              time: doc.data().time,
            })
        })
        return data1;

    }

    async function addUser(username, time) {
        try {
            const docRef = await addDoc(collection(db, "users"), {
              name: username,
              time: time,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return {
        data,
        data2,
        addUser,
        getScoreboard,
    }
})();

export default start;