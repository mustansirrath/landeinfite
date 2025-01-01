

  // Firebase Configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC6IPEocCfyMLhd58u8Bp1StTtHQzXhimc",
    authDomain: "learnandearn-e7a09.firebaseapp.com",
    projectId: "learnandearn-e7a09",
    storageBucket: "learnandearn-e7a09.firebasestorage.app",
    messagingSenderId: "294271603718",
    appId: "1:294271603718:web:b533ce374c91a32be01f87",
    measurementId: "G-4V7FDBRZ5T",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();