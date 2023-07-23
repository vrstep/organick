import {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
    title: {type: String, required: true},
    descriptioin: String,
    price: {type: Number, requred: true},
});

export const Product = models.Product || model('product', ProductSchema);