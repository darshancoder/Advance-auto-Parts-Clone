const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    original_price:{
        type : Number,
        required : true
    },
    offer_price : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    discount : {
        type : String,
        required : true
    }

}, {
    versionKey: false,
}
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;