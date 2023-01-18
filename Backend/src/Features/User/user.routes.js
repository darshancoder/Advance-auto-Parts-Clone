const User = require('./user.model');

const express = require('express');
const  jwt = require('jsonwebtoken');

const app = express.Router();





app.post('/signup', async (req, res) => {
    try {
        const { name,email, password ,role} = req.body;
        const getuser = await User.findOne({ email });
        if (getuser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({ name,email, password ,role});
        console.log('user: ', user);

        return res.status(201).send({ message : 'User Registered Successfully' });
        } catch (error) {
        return res.status(404).send({ error: 'Something went wrong' });
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('req.body: ', req.body);
    try {
        const user = await User.findOne({ email });
        console.log('user: ', user);
        if (!user) {
            return res.status(400).send({ message: 'User does not exist' });
        }
        if (user.password !== password) {
            return res.status(400).send({ message: 'Password is incorrect' });
        }

        const token = jwt.sign({ _id: user._id,name:user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).send({ message: 'Login successful' , token,user : user.name});
    } catch (error) {
        return res.status(404).send({ message : 'Something went wrong' });
    }
});

module.exports = app;