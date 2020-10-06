const form = document.getElementById('form');

function buscar() {


    var buscador = document.getElementById('buscador');




    if (buscador.value.length < 3) {
        // console.log("Hola");
        buscador.classList.add("is-invalid");
        document.getElementById("warningbuscar").textContent = "Introduzca mínimo 3 carácteres";

    } else {
        // console.log("Hola holita");
        buscador.classList.remove("is-invalid");
    }

}