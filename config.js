const firebaseConfig = {
    apiKey: "AIzaSyCwvnxfZXvls5zUzkjpB5I4K0hDRBjz7Ks",
    authDomain: "gclc-8b187.firebaseapp.com",
    databaseURL: "https://gclc-8b187-default-rtdb.firebaseio.com",
    projectId: "gclc-8b187",
    storageBucket: "gclc-8b187.appspot.com",
    messagingSenderId: "938242549157",
    appId: "1:938242549157:web:76c75e475e76b59490f44c"
};

firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

const user = firebase.auth().currentUser;