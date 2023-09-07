require("dotenv").config();
const express = require("express");
const path = require("path");

const navController = require("./server/Controllers/navigationController");
const giftcardController = require("./server/Controllers/giftcardController");
const categoryController = require("./server/Controllers/categoryController");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname , "./client")));

app.get("/" , ( req , res ) => res.redirect("/inicio"));
app.get("/inicio" , navController.getIndex);
app.get("/carrito" , navController.getCart);
app.get("/catalogo" , navController.getCatalogue);
app.get("/contacto" , navController.getContact);
app.get("/registrarse" , navController.getRegister);
app.get("/provincias" , navController.getProvince);

app.get("/api/giftcards" , giftcardController.getAll);
app.get("/api/categories" , categoryController.getAll);

app.listen(PORT , () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})