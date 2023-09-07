const mongoose = require("mongoose");
const { Schema , model } = mongoose;

const categorySchema = new Schema({
    titulo : String,
    image_url: String,
    slug: String
});

const Category = model("cateogry" , categorySchema);

module.exports = Category;