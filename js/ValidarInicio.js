const form = document.getElementById('form');

function validar() {
    var errores = 0;

    form.classList.remove('is-invalid');

    var email = document.getElementById('email');

    var pass = document.getElementById('pass');

    if (email.value == "" || !email.value == /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) {
        email.classList.add("is-invalid");
        document.getElementById("warningmail").textContent = "Email obligatorio";
        errores++;
    } else if (!validmail(email.value)) {
        email.classList.add("is-invalid");
        document.getElementById("warningmail").textContent = "Introduzca un email valido";
        errores++;
    }

    if (pass.value.length < 8 || pass.value.length > 16) {
        pass.classList.add("is-invalid");
        document.getElementById("warningpass").textContent = "Mínimo 8 carácteres y máximo 16";
        errores++;
    }



    if (errores > 0) {
        return false;
    } else {
        return true;
    }
}

form.addEventListener('blur', (event) => {

    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');

}, true);

function validmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}