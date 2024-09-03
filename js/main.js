const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");

// Bandera, al ser true permite agregar los datos a la tabla
let isValid = true;
let contador = 0;
let precio = 0;
let costoTotal = 0;
let totalEnProductos = 0;

function validarCantidad() {
    if (txtNumber.value.length == 0) {
        return false;
    } // length == 0

    if (isNaN(txtNumber.value)) {
        return false;
    } // isNaN

    if (Number(txtNumber.value) <= 0) {
        return false;
    } // <= 0

    return true;
} // validarCantidad()

function getPrecio() {
    return Math.round(Math.random() * 10000) / 100;
} // getPrecio

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.style.border = "";
    txtNumber.style.border = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    isValid = true;

    // Validar el nombre del producto
    if (txtNombre.value.length < 3) {
        txtNombre.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<div>El <strong>Nombre</strong> no es correcto</div>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } // if length < 3

    // Validar cantidad
    if (!validarCantidad()) {
        txtNumber.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "<div>La <strong>Cantidad</strong> no es correcta</div>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } // !validarCantidad

    if (isValid) {
        contador++;
        precio = getPrecio();
        let cantidad = Number(txtNumber.value);

        let row = `<tr>
                    <td>${contador}</td>
                    <td>${txtNombre.value}</td>
                    <td>${cantidad}</td>
                    <td>$${precio.toFixed(2)}</td>
            </tr>`;
        cuerpoTabla.insertAdjacentHTML("beforeend", row);

        costoTotal += precio * cantidad;
        totalEnProductos += cantidad;
        contadorProductos.innerText = contador;
        productosTotal.innerText = totalEnProductos;
        precioTotal.innerText = "$ " + costoTotal.toFixed(2);

        localStorage.setItem("contador", contador )
        localStorage.setItem("totalEnProductos", totalEnProductos )
        localStorage.setItem("costoTotal", costoTotal)

        txtNombre.value = "";
        txtNumber.value = "";
        txtNombre.focus();
    } // isValid
}); // btnAgregar .addEventListener

// Evento blur es cuando un campo pierde el foco (se sale del campo)

txtNombre.addEventListener("blur", function (event) {
    txtNombre.value = txtNombre.value.trim();
});

txtNumber.addEventListener("blur", function (event) {
    txtNumber.value = txtNumber.value.trim();
});

window.addEventListener("load", function(){
    if (this.localStorage.getItem("contador") !=null){
        contador = Number(this.localStorage.getItem("contador"))
    }//!null
    if (this.localStorage.getItem("totalEnProductos") !=null){
        totalEnProductos = Number(this.localStorage.getItem("totalEnProductos"))
    }//!null
    if (this.localStorage.getItem("costoTotal") !=null){
        costoTotal = Number(this.localStorage.getItem("costoTotal"))
    }//!null

    contadorProductos.innerText = contador
    productosTotal.innerText=totalEnProductos
    precioTotal.innerText ="$ " + costoTotal.toFixed(2)
   
});//windows load


