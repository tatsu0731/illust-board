import { getAuth } from "firebase/auth";
import app from "./firebase";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
