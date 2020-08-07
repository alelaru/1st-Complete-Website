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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  // console.log(userAuth.uid);
  // Creates a reference of the element
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // const collectionRef = firestore.collection("users");

  // Go and get an element with the reference previously made
  const snapShot = await userRef.get();
  // const collectionSnapshot = await collectionRef.get();
  // console.log("HHHHHEEEEEY");
  // console.log({ collection: collectionSnapshot.docs.map((doc) => doc.data()) });

  if (!snapShot.exists) {
    const { displayname, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayname,
        email,
        createdAt,
        ...additionalData,
      });
      console.log("Success");
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log("HEY ");
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
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
