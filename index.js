const express = require("express");

const navController = require("./Server/Controllers/navigationController");
const giftcardController = require("./Server/Controllers/giftcardController");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/inicio" , navController.getIndex);
app.get("/carrito" , navController.getCart);
app.get("/catalogo" , navController.getCatalogue);
app.get("/contacto" , navController.getContact);
app.get("/registrarse" , navController.getRegister);
app.get("/provincias" , navController.getProvince);

app.get("/api/giftcards" , giftcardController);

app.listen(PORT , () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})