require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const req = require('express/lib/request');
const res = require('express/lib/response');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send(
    'Hello from Node API Server checking it out now, it seems it worked'
  );
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });
const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server is running on port 3000'));
