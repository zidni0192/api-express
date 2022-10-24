import Router from "../utils/Router.js";
import {downloadProducts} from "../controller/Products.controller.js";

const productsRoutes = Router.get('/download', downloadProducts)

export default productsRoutes