const mongoose = require("mongoose");
const { Schema , model } = mongoose;

const giftCardSchema = new Schema({
    brand: String,
    price: Number,
    province: String,
    categorie: String
});

const giftCard = model("giftcard" , giftCardSchema);

module.exports = giftCard;