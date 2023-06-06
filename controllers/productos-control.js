import { productosServicios } from "../services/productos-servicios.js"
import { priceformat } from "../script/priceformat.js";


const nuevoProducto = (img, name, price, id, categoria) => {

    const card = document.createElement("div")
    const contenido = `
    <div class="card card_input" id="${id}">
    <img class="card_img" src="${img}" alt="">
    <h2 class="card_titulo">${name}</h2>
    <p class="card_precio">${priceformat(price)}</p>
    <p class="card_categoria">${categoria}</p>
    <a class="card_ver" href="../pages/productos_descripcion.html?id=${id}">Ver producto</a>
    </div>`

    card.innerHTML = contenido
    card.dataset.id = id

    return card
}

//GET
const divproductos = document.querySelector("[data-product]");

const renderProductos = async () => {
    try{
        const data = await productosServicios.listProductos();

        data.forEach((productos) => {
        divproductos.appendChild( 
            nuevoProducto(productos.img, productos.name, productos.price, productos.id, productos.categoria)
            );})
    } catch (err) {
        console.log(err);
    }
}

renderProductos();
