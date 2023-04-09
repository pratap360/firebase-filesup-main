// 🛑 Replace with your Firebase Config.  


// Firebase Config
// var firebaseConfig = {
//     apiKey: "**********",
//     authDomain: "**********",
//     databaseURL: "**********",
//     projectId: "**********",
//     storageBucket: "**********",
//     messagingSenderId: "**********",
//     appId: "**********",
//     measurementId: "**********"
//   };


// Firebase Config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXBegPt8bPrbsVmr32Vr6c1DXapZ2B6Us",
    authDomain: "filesups-2f0e7.firebaseapp.com",
    projectId: "filesups-2f0e7",
    storageBucket: "filesups-2f0e7.appspot.com",
    messagingSenderId: "1049517680527",
    appId: "1:1049517680527:web:80077df20a55f58b8e0dfa",
    measurementId: "G-BHLL2C86TD"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// -------------------------------------
// Upload A Single Image
// -------------------------------------

function uploadImage(e) {
    let file = e.target.files[0];
  
    firebase
      .app()
      .storage()
      .ref('images')
      .child(file.name)
      .put(file);
  }

const fileUploader = document.getElementById('fileUploader')

// Data
let file = {};

// File Uploaded Change Event
fileUploader.addEventListener('change', function (e) {
  file = e.target.files[0];
})

console.log(file)