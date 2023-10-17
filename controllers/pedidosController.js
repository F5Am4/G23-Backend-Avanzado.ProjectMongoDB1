const asyncHandler = require('express-async-handler');
const Pedido = require('../models/pedidosModel');

// Crear un nuevo pedido
const setPedido = asyncHandler(async (req, res) => {
  const { usuario, producto } = req.body;

  // Generar un número de pedido único. Aquí puedes usar la lógica que prefieras.
  const numeroPedido = Math.floor(Math.random() * 1000000);

  const pedido = new Pedido({
    usuario,
    producto,
    numeroPedido
  });

  const nuevoPedido = await pedido.save();

  res.status(201).json(nuevoPedido);
});

module.exports = {
  setPedido
}