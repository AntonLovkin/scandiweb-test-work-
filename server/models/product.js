import mongoose from "mongoose";

const productSchema= mongoose.Schema({
    sku: String,
    name: String,
    price: Number,
    size: Number,
    height: Number,
    width: Number,
    length: Number,
    weight: Number,
    checked: Boolean,
});

const Product = mongoose.model('Product', productSchema);

export default Product;