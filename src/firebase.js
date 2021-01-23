import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdHk-762WG_qfQlniBgQwm677KviThITE",
  authDomain: "praveenoruganti-discord-clone.firebaseapp.com",
  projectId: "praveenoruganti-discord-clone",
  storageBucket: "praveenoruganti-discord-clone.appspot.com",
  messagingSenderId: "805461728547",
  appId: "1:805461728547:web:9ea9115114ae872cbfc096"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
