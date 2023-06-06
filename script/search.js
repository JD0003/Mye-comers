const buscar = document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){

        document.querySelectorAll(".card_input").forEach(productos =>{
            const cardTitulo = productos.querySelector(".card_titulo");
            cardTitulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            
            ?productos.classList.add("card"):
            productos.classList.remove("card") & productos.classList.add("card_no")
            console.log(productos)
        })
    }
})