const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const connect = require('./config/db');
const userRoutes = require('./Features/User/user.routes');
const productRoutes = require('./Features/Product/product.routes');
const cartRoutes = require('./Features/Cart/cart.routes');


app.use(express.json());
app.use(cors());
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);

app.get("/", (req,res)=>{
    res.send ("To get the product First signup => login => call:url/product")
})

app.listen(PORT, async () => {
    await connect();
    console.log(`server on local http://localhost:${PORT}`);
});
