const mongoose = require('mongoose')

const pedidoSchema = mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Usuario'
  },
  numeroPedido: {
    type: Number,
    required: true,
    unique: true
  },
  producto: {
  type: mongoose.Schema.Types.ObjectId,
  require: true,
  ref: 'Producto'
  }
}, {
  timestamps: true
});

const Pedido = mongoose.model('Pedido', pedidoSchema)

module.exports = Pedido