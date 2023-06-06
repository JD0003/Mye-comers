import { productosServicios } from "../services/productos-servicios.js";
import { priceformat } from "./priceformat.js";

const createDetails = (img, name, price, descripcion) => {
    const line = document.createElement('div')
    line.classList.add('descripcion-container')
    const content = `
    <img
    src="${img}"
    alt="${name}"
    class="descripcion-img" />
    <div class="descripcion-div">
    <h1 class="descripcion-title">${name}</h1>
    <p class="descripcion-price">${priceformat(price)}</p>
    <p class="descripcion-text">
    ${descripcion}
    </p>
    </div>
    `
    line.innerHTML = content
    return line
}
const section = document.querySelector("[data-ver]")

window.addEventListener('DOMContentLoaded', () => {
    showDetails()
})

  // Función para se muestre el producto en detalle

const showDetails = async () => {
    const url = new URL(window.location)
    const id = url.searchParams.get('id')

    if (id === null) return (window.alert('Hubo un error'))

    const newDiv = document.createElement('div')
    const loading = `<div class="loader">
    <div class="scanner">
    <h1 class="loading">Loading...</h1></div>
    </div>`
    newDiv.innerHTML = loading
    section.appendChild(newDiv)
    try {
        const product = await productosServicios.listarUnProducto(id)
        section.replaceChildren()
        if (product.name && product.price && product.descripcion) {
        const newLine = createDetails(product.img, product.name, product.price, product.descripcion)
        document.title =  product.name;
        section.appendChild(newLine)
    } else {
        throw new Error()
    }
    } catch (error) {console.log(error)}
}
