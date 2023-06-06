// CRUD

//POST
const crearProducto = (img, name, price, descripcion, categoria) => {
    return fetch("http://localhost:5000/productos",{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({img, name, price, descripcion, categoria}),})
        .then((respuesta) => {
        if(respuesta.ok){
            return respuesta.body
        }throw new Error("No pudimos crear el producto")
    })
}

//GET
const listProductos = () => fetch(`http://localhost:5000/productos`)
.then((resposta) => resposta.json())
.catch((error) => console.log(error));

const listarUnProducto = (id) => fetch(`http://localhost:5000/productos/${id}`).then(respuesta => respuesta.json());

// PUT/PATCH
const alteraProducto = async (id, img, name, price, descripcion, categoria) => {
    return await fetch(`http://localhost:5000/productos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({img, name, price, descripcion, categoria}), })
    .then((respuesta) => {
        return respuesta.json();
    })
    .catch((error) => console.log(error));
};

//DELETE
const deleteProducto = async (id) => {
    return await fetch(`http://localhost:5000/productos/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    });
};

export const productosServicios = {
    crearProducto,
    listProductos,
    listarUnProducto,
    alteraProducto,
    deleteProducto,
}
