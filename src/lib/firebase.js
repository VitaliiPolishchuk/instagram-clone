import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import env from "react-dotenv";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID,
  appId: env.APP_ID,
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// seedDatabase(firebase);

export { firebase, FieldValue };
