import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFrpeuBdMuwki89l9uK0-ZBTToKTxlc24",
  authDomain: "revents-a832b.firebaseapp.com",
  databaseURL: "https://revents-a832b.firebaseio.com",
  projectId: "revents-a832b",
  storageBucket: "revents-a832b.appspot.com",
  messagingSenderId: "471340706169",
  appId: "1:471340706169:web:dbe6995ebe878cda"
}
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = {
  // timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;