import userRoutes from './users.routes.js'

export const generateRoutes = (app) => {
    app.prefix('/api/:version', function (cats) {
        cats.use('/users',userRoutes);
    });
}