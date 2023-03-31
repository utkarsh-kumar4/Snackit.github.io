var firebaseConfig = {
  apiKey: "AIzaSyDxj4cLmtKZaqfU7HJS-6rhMPNBOUREB2s",
  authDomain: "database-b19c4.firebaseapp.com",
  projectId: "database-b19c4",
  storageBucket: "database-b19c4.appspot.com",
  messagingSenderId: "108850000639",
  appId: "1:108850000639:web:3273c42f5aba94c31e12ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {get,getDatabase,ref,set,child,update,remove} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

const db = getDatabase();
var name = document.getElementById("#canteenName");
var email = document.getElementById("#canteenEmail");
var phone = document.getElementById("#canteenPhone");
var address = document.getElementById("#canteenAddress");
// var image = document.getElementById("canteenImage").value;

var set = document.getElementById("save");


function save() {
  set(ref(db,"admins/"+name.value),{
    name: name.value,
    email: email.value,
    phone: phone.value,
    address: address.value
    // image: image
  })
  .then(()=>{
    alert("Canteen added successfully");
  })
  .catch((error)=>{
    document.getElementById("error").innerHTML = error.message;
  })
}

save.addEventListener('click',save());