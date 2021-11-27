import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyASPIpBrb7Kymlp88TTezArdTlWfXaZ9eA",
    authDomain: "panchmeshalii-83e52.firebaseapp.com",
    databaseURL: "https://panchmeshalii-83e52.firebaseio.com",
    projectId: "panchmeshalii-83e52",
    storageBucket: "panchmeshalii-83e52.appspot.com",
    messagingSenderId: "899512981363",
    appId: "1:899512981363:web:28a0ea39fff499d09c1706"
  };
firebase.initializeApp(firebaseConfig);
var auth=firebase.auth();
var database=firebase.database();
export default database;
export {auth};
  