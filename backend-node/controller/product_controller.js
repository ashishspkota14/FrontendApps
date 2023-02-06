const Product = require('../model/product_model')

const get_products = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {}
}

const create_product = async (req, res) => {
  try {
    const product = new Product({
      product_name: req.body.product_name,
      price: req.body.price,
    })

    const save_product = await product.save()
    res.send(save_product)
    res.json()
  } catch (error) {}
}

const delete_product = async (req, res) => {
  console.log(req.params.id)
  try {
    const delete_product = await Product.findByIdAndDelete(req.params.id)
    // console.log(delete_product)
    res.json(delete_product)
  } catch (error) {}
}

const get_single_product = async (req, res) => {
  console.log(req.params.id)
  try {
    const get_single_product = await Product.findById(req.params.id)
    res.json(get_single_product)
  } catch (error) {}
}

module.exports = {
  get_products,
  create_product,
  delete_product,
  get_single_product,
}
