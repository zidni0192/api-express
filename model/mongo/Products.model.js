import mongoose from 'mongoose'
import productsSchema from "../../schemas/mongo/Products.schema.js";

const Products = mongoose.model("goods", productsSchema)

export default Products