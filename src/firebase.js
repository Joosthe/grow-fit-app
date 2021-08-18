import firebase from "firebase";
import 'firebase/auth';

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREB_API_KEY,
  // authDomain: process.env.REACT_APP_FIREB_AUTHDOM,
  // projectId: process.env.REACT_APP_FIREB_PROJID,
  // storageBucket: process.env.REACT_APP_FIREB_STORBUCK,
  // messagingSenderId: process.env.REACT_APP_FIREB_MESSSENDID,
  // appId: process.env.REACT_APP_FIREB_APPID,
  // measurementId: process.env.REACT_APP_FIREB_MEASUREID,

  apiKey:"AIzaSyDSm80Eis2TwqSNl-mWF0JjN7J5FOEE4H8",
  authDomain:"grow-fit-56859.firebaseapp.com",
  projectId: "grow-fit-56859",
  storageBucket: "grow-fit-56859.appspot.com",
  messagingSenderId:"96870623929",
  appId:"1:96870623929:web:2fc69bd6b33923a5994968",
  measurementId:"G-HWXWNRV1TW"
})

export const auth = app.auth();
export default app;
