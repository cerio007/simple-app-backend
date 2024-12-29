const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const {getProducts, getProduct, createProduct, deleteProduct, updateProduct} = require('../controller/product.controlller.js');

router.get('/', getProducts);
router.get('/:id', getProduct);

// create a product
router.post('/', createProduct);

// update a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct);


module.exports = router;