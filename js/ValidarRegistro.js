const form = document.getElementById('form');

function validar() {
    var errores = 0;

    form.classList.remove('is-invalid');
    var nombre = document.getElementById('nombre');
    var apellidos = document.getElementById('apellidos');
    var email = document.getElementById('email');
    var provincia = document.getElementById('provincia')
    var pass = document.getElementById('pass');
    var repass = document.getElementById('repass');
    var check = document.getElementById('check');


    if (nombre.value == "") {
        nombre.classList.add("is-invalid");
        document.getElementById("warningnombre").textContent = "Introduzca su nombre";
        errores++;
    } else if (isNaN(nombre.value) === false) {
        nombre.classList.add("is-invalid");
        document.getElementById("warningnombre").textContent = "No introduzca números";
        errores++;
    }
    if (apellidos.value == "") {
        apellidos.classList.add("is-invalid");
        document.getElementById("warningapellidos").textContent = "Introduzca sus apellidos";
        errores++;
    } else if (isNaN(apellidos.value) === false) {
        apellidos.classList.add("is-invalid");
        document.getElementById("warningapellidos").textContent = "No introduzca números";
        errores++;
    }


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

    if (repass.value != pass.value) {
        repass.classList.add("is-invalid");
        document.getElementById("warningrepass").textContent = "Las contraseñas deben coincidir";
        errores++;
    } else if (repass.value == "") {
        repass.classList.add("is-invalid");
        document.getElementById("warningrepass").textContent = "No puede dejar este espacio en blanco";
        errores++;
    }
    if (provincia.value == "") {
        provincia.classList.add("is-invalid");
        document.getElementById("warningprov").textContent = "La provincia es obligatoria";
        errores++;
    }
    if (!check.checked) {
        check.classList.add("is-invalid");
        document.getElementById("warningcheck").textContent = "Acepta las bases";
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
