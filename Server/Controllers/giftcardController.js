const { conectarDB , desconectarDB } = require("../../Server/db/connection");
const giftCard = require("../db/schemas/giftcardSchema");

const getAll = async ( req , res ) => {
    console.log("Nueva petición");
    await conectarDB();
    const giftcard = await giftCard.find({});
    await desconectarDB();
    res.json(giftcard);
}

module.exports = { getAll };