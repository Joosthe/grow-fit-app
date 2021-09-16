import firebase from "firebase";
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey:            import.meta.env.VITE_FIREB_APIKEY,
  authDomain:        import.meta.env.VITE_FIREB_AUTHDOMAIN,
  projectId:         import.meta.env.VITE_FIREB_PROJECTID,
  storageBucket:     import.meta.env.VITE_FIREB_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREB_MESSAGINGSENDERID,
  appId:             import.meta.env.VITE_FIREB_APPID,
  measurementId:     import.meta.env.VITE_FIREB_MEASUREMENTID
});

export const auth = app.auth();
export default app;
