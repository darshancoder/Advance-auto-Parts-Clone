const Cart = require('./cart.model');

const express = require('express');

const app = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');

app.use(authMiddleware);

app.get('/', async (req, res) => {
    const userId = req.userId 
try {
const carts = await Cart.find({userId}).populate('productId').select('-userId');
return res.status(200).send({ carts });
    
} catch (error) {
    return res.status(404).send({ message: error.message });
}
    

});

app.post('/', async (req, res) => {
    const userId = req.userId
try {
    const { productId, quantity } = req.body;

    const isProductExist = await Cart.findOne({ productId, userId });
    if (isProductExist) {
        return res.status(404).send({ message: 'Product already exists in cart' });
    }
   
    
    const cart = await Cart.create({ userId,productId, quantity });
    const newCartItem = await Cart.findById(cart._id).populate('productId').select('-userId');
    return res.status(201).send({ message:`Product Added Successfully in cart`,newCartItem });
} catch (error) {
    return res.status(404).send({ message: 'Something went wrong' });
}
});

app.put('/:id', async (req, res) => {
    const userId = req.userId
try {
    const { id } = req.params;
    const cartItem = await Cart.findById(id);
    
    if (cartItem && cartItem.userId.toString() === userId) {
        
        const {  quantity } = req.body;
        const cart = await Cart.findByIdAndUpdate(id, { userId,productId:cartItem.productId, quantity }, { new: true }).populate('productId').select('-userId');
        return res.status(200).send({ message: 'Cart updated successfully', updatedItem: cart });

    }
    else{
        return res.status(404).send({ message: 'Item does not exist in cart' });
    }
} catch (error) {
    return res.status(404).send({ message: 'Something went wrong' });
}
});

app.delete('/:id', async (req, res) => {
    const userId = req.userId
try {
    const { id } = req.params;
    const cartItem = await Cart.findById(id);
    if (cartItem && cartItem.userId.toString() === userId) {
    
    const cart = await Cart.findByIdAndDelete(id).populate('productId').select('-userId');

    return res.status(200).send({ message:`Product delete from the cart`,deletedItem:cart });
    }
    else{
        return res.status(404).send({ message: 'Item does not exist in cart' });
    }
} catch (error) {
    return res.status(404).send({ message: 'Something went wrong' });
}
});
    



module.exports = app;

