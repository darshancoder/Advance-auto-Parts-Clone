const mongoose = require('mongoose');
// {
//     "id": 1,
//     "img": "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2/thumb/12419626_fdv_fda8755a_pri_thmb.jpg",
//     "original_price":100,
//     "offer_price": 19.79,
//     "brand": "FRAM Drive",
//     "desc": "Drive Rigid Panel Engine Air Filter: Standard, Meets or Exceeds Manufacturer Specifications",
//     "store_pickup": false,
    
//     "category" : "cabin_air_filter"          
//   },
const productSchema = new mongoose.Schema({
    img : {
        type : String,
        required : true
    },
    brand : {
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
    desc : {
        type : String,
        required : true
    },
    store_pickup:{
        type : Boolean,
        required : true
    },
   

}, {
    versionKey: false,
}
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;