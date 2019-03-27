import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyCviTqs4VeR-SMrPTYX6G5yEYLnT67hyVc",
    authDomain: "timesheetentr.firebaseapp.com",
    databaseURL: "https://timesheetentr.firebaseio.com",
    projectId: "timesheetentr",
    storageBucket: "timesheetentr.appspot.com",
    messagingSenderId: "524915819635"
};

firebase.initializeApp(config)

var dbRef = firebase.database().ref();
var usersRef = dbRef.child("users"); //crea registro 

// rootRef.on('value', snap => ion-list-ion-item = snap.val());

usersRef.isEqual(dbRef);  // false
usersRef.isEqual(dbRef.child("users"));  // true
usersRef.parent.isEqual(dbRef);  // true


/* VALIDAR USUARIO EN LA BASE */
// function checkUser(userName: string, pass: string, dbRef ) {
//     try {
        
//     } catch (error) {
        
//     }
// }

// export