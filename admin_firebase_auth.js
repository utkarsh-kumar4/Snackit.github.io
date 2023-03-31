var firebaseConfig = {
    apiKey: "AIzaSyCd4hHJle8eXAJL7qBiwOVzP4eLMxoGhtQ",
    authDomain: "snack-it-d407b.firebaseapp.com",
    databaseURL: "https://snack-it-d407b-default-rtdb.firebaseio.com",
    projectId: "snack-it-d407b",
    storageBucket: "snack-it-d407b.appspot.com",
    messagingSenderId: "329448699753",
    appId: "1:329448699753:web:cd3045621526bf5d2eaff8"
  };
  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Login code.
async function login(event) {
    event.preventDefault();
    const email = document.querySelector("#loginEmail");
    const password = document.querySelector("#loginPassword");

    try{
        const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
    }
    catch(error){
        document.getElementById("error").innerHTML = error.message;
    }
    email.value="";
    password.value="";
}

//Signup code.
async function signup(event) {
    event.preventDefault();
    const email = document.querySelector("#signupEmail");
    const password = document.querySelector("#signupPassword");

    try{
        const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
    }
    catch(error){
        document.getElementById("error").innerHTML = error.message;
    }
    email.value="";
    password.value="";
}

// Logout code.
function logout(){
    firebase.auth().signOut();
}

const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
    } else {
        console.log("Signout success!")
    }
  });
unsubscribe();

// Login with Google code.
async function loginwithGoogle(){
    try{
        var provider = new firebase.auth.GoogleAuthProvider();
        const result = await firebase.auth().signInWithPopup(provider);
        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
}

// Forgot Password code.
function forgotPassword(){
    const email = document.querySelector("#loginEmail").value;
    firebase.auth().sendPasswordResetEmail(email).then(() => {
        alert("Reset link sent to your Email ID.");
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
    });
}