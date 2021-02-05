function RegisterUser() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
        alert('User Registered successfully');




    }).catch(function (error) {

        var errorcode = error.code;
        var errormsg = error.message;
        alert("Error:" + errormsg);
    });
}