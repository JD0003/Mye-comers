const footer = document.querySelector("[data-footer]");

footer.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-footer-t]").value;
    const mensaje = document.querySelector("[data-footer-c]").value;

    if (nombre.length > 4 && mensaje.length > 1) {
    window.location.href = "../pages/index.html";
    }else{
        alert("Complete el formulario")
    }
});