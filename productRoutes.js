const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./productController');

const validateProduct = require('./validateProduct');
const authMiddleware = require('./auth');

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Protected routes (require a token)
router.post('/', authMiddleware, validateProduct, createProduct);
router.put('/:id', authMiddleware, updateProduct);
router.delete('/:id', authMiddleware, deleteProduct);

module.exports = router;