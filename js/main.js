const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");

function validarCantidad() {
    if (txtNumber.value.length == 0) {
        return false;
    }//length==0

    if (isNaN(txtNumber.value)) {
        return false
    }//isNan

    if (Number(txtNumber.value) <= 0) {
        return false;
    }// isNaN

    return true;
} // validarCantidad()

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.style.border = "";
    txtNumber.style.border = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    if (txtNombre.value.length < 3) {
        txtNombre.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<div>El <strong>Nombre</strong> no es correcto</div>";
        alertValidaciones.style.display = "block";
    }

    if (!validarCantidad()) {
        txtNumber.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<div>La <strong>Cantidad</strong> no es correcta</div>";
        alertValidaciones.style.display = "block";
    }
});

txtNombre.addEventListener("blur", function (event) {
    txtNombre.value = txtNombre.value.trim();
});
