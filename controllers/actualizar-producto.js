import { productosServicios } from "../services/productos-servicios.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion =  () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const img = document.querySelector("[data-img]");
    const categoria = document.querySelector("[data-categoria]");
    const name = document.querySelector("[data-name]");
    const price = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    //GET
    productosServicios.listarUnProducto(id).then((productos) => {
        img.value = productos.img;
        name.value = productos.name;
        price.value = productos.price;
        descripcion.value = productos.descripcion;
        categoria.value = productos.categoria;
    })
}

obtenerInformacion();

formulario.addEventListener("submit", (e)=> {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    e.preventDefault();
    const img = document.querySelector("[data-img]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    // PUT/PATCH
    productosServicios.alteraProducto(id, img, name, price, descripcion, categoria).then( () => {window.location.href = "/pages/index.html";})
})

//