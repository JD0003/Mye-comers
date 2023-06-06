import { priceformat } from "../script/priceformat.js";
import { productosServicios } from "../services/productos-servicios.js";


const getProducts = (name, price, img, id) => {
    const card = document.createElement("div");

    const contenido = `
        <div class="producto">
            <div class="container">
                <button class="buttonDelete" type="button">
                    <img class="deleteImage" src="../assets/productos/delete.png" alt="Deletar" />
                </button>
                
                <a href="/pages/productos_editar.html?id=${id}">
                <button class="buttonEdit" type="button">
                    <img class="editImage" src="../assets/productos/edit.png" alt="Editar" />
                </button>
                </a>
            </div>
            
            <img class="product-img" src="${img}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="precio">${priceformat(price)}</p>
        </div>
        `;
    card.innerHTML = contenido;
    card.dataset.id = id;
    return card;
    };

const productos = document.querySelector("[data-allProducts]");
////DELETE
productos.addEventListener("click", async (evento) => {
    const deleteButton = evento.target.className === "deleteImage";
    
    if (deleteButton) {
        const producto = evento.target.closest("[data-id]");
        const id = producto.dataset.id;
        const res = await productosServicios.deleteProducto(id).catch((err) => console.log(err));
            producto.remove();
            console.log(res);
        }
});

//GET
const render = async () => {
    try {
        const listaProductos = await productosServicios.listProductos();
        
        listaProductos.forEach((producto) => {
        productos.appendChild( getProducts (producto.name, producto.price, producto.img, producto.id));});
    }catch(err){console.log(err);}
};

render();