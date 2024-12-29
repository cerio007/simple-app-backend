const express = require('express');
const mongoose = require('mongoose');
const req = require('express/lib/request');
const res = require('express/lib/response');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello from Node API Server checking it out now, it seems it worked');
});

mongoose.connect('mongodb+srv://abosicyprian07:GGkTVSPU9X4nflIm@backenddb.x0jjl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log('Connection failed!');
});