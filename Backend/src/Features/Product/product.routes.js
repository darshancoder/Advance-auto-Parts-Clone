const Product = require('./product.model');

const express = require('express');

const app = express.Router();

const authMiddleware = require('../Middleware/authMiddleware');

app.get('/', async (req, res) => {

    try {
        let { category,offer_price,original_price, sort,orderBy ,limit,page } = req.query;
     const query = {};
        if (category) {
            query.category = category;
        }
       
        if (offer_price) {
            let [min, max] = offer_price.split(',');
            query.offer_price = { $gte: min, $lte: max };
            
        }
        if (original_price) {
            query.original_price = +original_price;
        }
        if(!limit){
            limit = 20;
        }
        if(!page){
            page = 1;
        }
        


        const products = await Product.find(query).sort({ [sort]: orderBy === 'asc' ? 1 :  orderBy === 'desc' ? -1 : 0 }).limit(+limit).skip((+page-1)*limit);
    
    return res.status(200).send({ products });
    } catch (error) {
    return res.status(404).send({ error: error.message });
    }
});

app.get('/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }
        return res.status(200).send({ product });
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
});


app.post('/',authMiddleware, async (req, res) => {

    

    try {
    const { img, brand, original_price, offer_price,  category,store_pickup,desc } = req.body;
    const product = await Product.create({img, brand, original_price, offer_price,  category,store_pickup,desc });

    return res.status(201).send({ product });
    } catch (error) {
    return res.status(404).send({ error: 'Something went wrong' });
    }
});

app.put('/:id',authMiddleware, async (req, res) => {
   
    try {
    const { id } = req.params;
    const { img, brand, original_price, offer_price,  category,store_pickup,desc} = req.body;
    const product = await Product.findByIdAndUpdate(id, { img, brand, original_price, offer_price,  category,store_pickup,desc}, { new: true });

    return res.status(200).send({ product });
    } catch (error) {
    return res.status(404).send({ error: 'Something went wrong' });
    }
});

app.delete('/:id',authMiddleware, async (req, res) => {
    
    
    try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    return res.status(200).send({ product });
    } catch (error) {
    return res.status(404).send({ error: 'Something went wrong' });
    }
});


module.exports = app;