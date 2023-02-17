
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_check = document.getElementById("password_check");
const form= document.getElementById("form");

form.addEventListener('submit', function (e) {
    if(validateForm() == false) {
        e.preventDefault();
    } else {
        alert("Cuenta creada satisfactoriamente.");
    }

});

function validateForm(){
    checkUser();
    checkEmail();
    checkClave();
    checkClaveRepetida();

    if(validateUser() == true && validateEmail() == true && validateClave() == true && validateClaveRepetida() == true) {
        return true;
    } 
    return false;
}

function checkUser() {
    const usernameValue = username.value;
    if(usernameValue === "") {
        setErrorFor(username, "Debe introducir un nombre de usuario", "user");
    } else {
        setSuccessFor(username, "user");
    }
}

function checkEmail() {
    const emailValue = email.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        setSuccessFor(email, "email");
    } else {
        setErrorFor(email, "Email inválido", "email");
    }
}

function checkClave() {
    const passwordValue = password.value;
    if (passwordValue.length >= 8) {
        setSuccessFor(password, "clave");
    } else {
        setErrorFor(password, "La contraseña debe tener mínimo 8 carácteres", "clave");
    }
}

function checkClaveRepetida() {
    const passwordValue = password.value;
    const newPassword = password_check.value;
    if (passwordValue == newPassword && newPassword.length >= 8) {
        setSuccessFor(password_check, "clavec");
    } else {
        setErrorFor(password_check, "Las contraseñas no coinciden", "clavec");
    }
}

function validateUser() {
    const usernameValue = username.value;
    if(usernameValue === "") {
        return false;
    } else {
        return true;
    }
}

function validateEmail() {
    const emailValue = email.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        return true;
    }
    return false;
}

function validateClave() {
    const passwordValue = password.value;
    if (passwordValue.length >= 8) {
        return true;
    }
    return false;
}

function validateClaveRepetida() {
    const passwordValue = password.value;
    const newPassword = password_check.value;
    if (passwordValue == newPassword && newPassword.length >= 8) {
        return true;
    }
    return false;
}


function setErrorFor(input, message, id) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = message;
    formControl.className = "form-control error ok";
    document.getElementById('ok_' + id).style.visibility = "hidden";
    document.getElementById('nok_' + id).style.visibility = "visible";
}

function setSuccessFor(input, id) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
    document.getElementById('ok_' + id).style.visibility = "visible";
    document.getElementById('nok_' + id).style.visibility = "hidden";
}