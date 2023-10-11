const express = require('express')
const router = express.Router()
const { getProductos, setProducto, getProductoById, updateProducto, deleteProducto } = require('../controllers/productoControllers')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getProductos)
router.post('/', protect, setProducto)
router.get('/:id', protect, getProductoById)
router.put('/:id', protect, updateProducto)
router.delete('/:id', protect, deleteProducto)

module.exports = router