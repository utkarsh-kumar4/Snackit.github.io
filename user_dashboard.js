firebase.auth().onAuthStateChanged((user)=>{
    if(!user) {
        location.replace("index.html");
    }
})