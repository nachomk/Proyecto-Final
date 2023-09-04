const { conectarDB , desconetcarDB } = require("../../Server/db/connection");
const User = require("../db/schemas/productSchema");

const getAll = async ( req , res ) => {
    console.log("Nueva petición");
    await conectarDB();
    const giftcard = await User.find({})
    await desconectarDB()
    res.json(giftcard);
}