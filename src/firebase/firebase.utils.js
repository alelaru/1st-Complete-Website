import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBzKGiTcpWhd2hXJEWtLFi4BmnKFd1baTE",
  authDomain: "crown-db-b4908.firebaseapp.com",
  databaseURL: "https://crown-db-b4908.firebaseio.com",
  projectId: "crown-db-b4908",
  storageBucket: "crown-db-b4908.appspot.com",
  messagingSenderId: "564873499186",
  appId: "1:564873499186:web:7209aa314191128340622b",
  measurementId: "G-P2X1QWPCSB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
