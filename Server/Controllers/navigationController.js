const path = require("path");

const getIndex = ( req, res) => {
    const file_path = path.join(__dirname , "../../Client/HTML/index.html");
    res.sendFile(file_path);
}

const getCart = ( req, res) => {
    const file_path = path.join(__dirname , "../../Client/HTML/carrito.html");
    res.sendFile(file_path);
}

const getCatalogue = ( req, res) => {
    const file_path = path.join(__dirname , "../../Client/HTML/catalogo.html");
    res.sendFile(file_path);
}

const getContact = ( req, res) => {
    const file_path = path.join(__dirname , "../../Client/HTML/contacto.html");
    res.sendFile(file_path);
}

const getRegister = ( req, res) => {
    const file_path = path.join(__dirname , "../../Client/HTML/registrarse.html");
    res.sendFile(file_path);
}
const getProvince = ( req, res) => {
    const file_path = path.join(__dirname , "../../Client/HTML/provincias.html");
    res.sendFile(file_path);
}

module.exports = { 
    getIndex , 
    getCart , 
    getCatalogue , 
    getContact , 
    getRegister , 
    getProvince 
};