firebase.auth().onAuthStateChanged((user)=>{
    if(user) {
        location.replace("user_dashboard.html");
    }
})