const asyncHandler = require('express-async-handler');
const Producto = require('../models/productosModel');

// Obtener todos los productos
const getProductos = asyncHandler(async (req, res) => {
  const productos = await Producto.find();
  res.status(200).json(productos);
});

// Crear un nuevo producto
const setProducto = asyncHandler(async (req, res) => {
  const { nombreProducto, precio, existencia } = req.body;

  if (!req.user._id) {
    res.status(400);
    throw new Error('Usuario no autenticado');
  }

  const producto = new Producto({
    usuario: req.user._id,
    nombreProducto,
    precio,
    existencia
  });

  const nuevoProducto = await producto.save();

  res.status(201).json(nuevoProducto);
});

// Obtener un producto por ID
const getProductoById = asyncHandler(async (req, res) => {
  const producto = await Producto.findById(req.params.id);

  if (producto) {
    res.status(200).json(producto);
  } else {
    res.status(404);
    throw new Error('Producto no encontrado');
  }
});

// Actualizar un producto por ID
const updateProducto = asyncHandler(async (req, res) => {
  const { usuario, nombreProducto, precio, existencia } = req.body;

  const producto = await Producto.findById(req.params.id);

  if (producto) {
    producto.usuario = usuario;
    producto.nombreProducto = nombreProducto;
    producto.precio = precio;
    producto.existencia = existencia;

    const productoActualizado = await producto.save();
    res.status(200).json(productoActualizado);
  } else {
    res.status(404);
    throw new Error('Producto no encontrado');
  }
});

// Eliminar un producto por ID
const deleteProducto = asyncHandler(async (req, res) => {
  const producto = await Producto.findById(req.params.id);

  if (producto) {
    await producto.remove();
    res.status(200).json({ message: 'Producto eliminado' });
  } else {
    res.status(404);
    throw new Error('Producto no encontrado');
  }
});

module.exports = {
  getProductos,
  setProducto,
  getProductoById,
  updateProducto,
  deleteProducto,
};