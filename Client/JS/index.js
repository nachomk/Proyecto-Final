const provincias = document.querySelectorAll(".provincia");
provincias.forEach((provincia) => {
    addEventListener("click" , (event) => {
        localStorage.setItem("provSelect" , event.target.id);
        window.location = "/catalogo"
    });
});