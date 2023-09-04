const express = require("express");

const navController = require("./Server/Controllers/navigationController");
const app = express();
const PORT = 8080;

app.arguments(express.json());

app.get("/" , navController.getIndex);
app.get("/" , navController.getCart);
app.get("/" , navController.getCatalogue);
app.get("/" , navController.getContact);
app.get("/" , navController.getRegister);
app.get("/" , navController.getProvince);

app.listen(PORT , () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})