const { conectarDB , desconectarDB } = require("../../Server/db/connection");
const giftCard = require("../db/schemas/giftcardSchema");

const getAll = async ( req , res ) => {
    console.log("Nueva petición");
    const { province , categorie } = req.query
    let query = {}
    if (province) query.province = province;
    if (categorie) query.categorie = categorie;

    await conectarDB();
    const giftcard = await giftCard.find(query);
    await desconectarDB();
    res.json(giftcard);
}

module.exports = { getAll };