firebase.auth().onAuthStateChanged((user)=>{
    if(user) {
        location.replace("admin_dashboard.html");
    }
})