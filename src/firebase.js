 import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCj4zX1T_11dJ81Ch6zAaKzCwkRhZpPgYM",
  authDomain: "whatsapp-mern-fe08f.firebaseapp.com",
  projectId: "whatsapp-mern-fe08f",
  storageBucket: "whatsapp-mern-fe08f.appspot.com",
  messagingSenderId: "710142259462",
  appId: "1:710142259462:web:fde1963bd4e8baad81ae87"
};

 firebase.initializeApp(firebaseConfig)

// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()
// export { auth, provider} 