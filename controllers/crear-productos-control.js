import { productosServicios } from "../services/productos-servicios.js";


const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {e.preventDefault();

    const img = document.querySelector("[data-img]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

//POST
    productosServicios.crearProducto(img,nombre,precio,descripcion,categoria)
    .then( () => { window.location.href = "../pages/index.html"}).catch(error => {
        console.log(error)})})