import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confic";

const initializationAuthentication = () => {
   initializeApp(firebaseConfig)
}

export default initializationAuthentication;