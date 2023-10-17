const express = require('express')
const router = express.Router()
const { setPedido } = require('../controllers/pedidosController')

router.route('/').post(setPedido)

module.exports = router