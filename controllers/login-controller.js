const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;

    if (email.length > 8 && password.length > 8) {
    window.location.href = "../pages/productos_seleccionar.html";
    } else {
        alert("email y contraseña deben tener mas de 8 caracteres.");
    }
});