const { conectarDB , desconectarDB } = require("../db/connection");
const Category = require("../db/schemas/categorySchema");

const getAll = async ( req , res ) => {
    await conectarDB();
    const categories = await Category.find({});
    await desconectarDB();
    res.json(categories);
}

module.exports = { getAll };