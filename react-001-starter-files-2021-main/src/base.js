import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9Mq8fmw3MhCsnjYewOB7124ovsb7KHC0",
    authDomain: "hot-burgers-5b19c.firebaseapp.com",
    databaseURL: "https://hot-burgers-5b19c-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;