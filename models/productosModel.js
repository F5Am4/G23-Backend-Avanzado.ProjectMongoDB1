const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  nombreProducto: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  existencia: {
    type: Number,
    required: true
  }
});

ProductoSchema.index({ usuario: 1 }, { unique: false });

module.exports = mongoose.model('Producto', ProductoSchema);