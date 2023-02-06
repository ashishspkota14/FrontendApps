const router = require('express').Router()
const product_controller = require('../controller/product_controller')

router.get('/', product_controller.get_products)
router.post('/', product_controller.create_product)
router.delete('/:id', product_controller.delete_product)
router.get('/:id', product_controller.get_single_product)

module.exports = router
