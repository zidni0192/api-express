import userRoutes from './Users.routes.js'
import productsRoutes from "./Products.routes.js";

export const generateRoutes = (app) => {
    app.prefix('/api/:version', function (router) {
        router.use('/users', userRoutes);
        router.use('/products', productsRoutes);
    });
}