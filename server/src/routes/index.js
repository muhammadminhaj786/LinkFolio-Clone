import authRoutes from "./auth.routes.js";



const routes = (app)=> {
    // app.use('/api',checkServer);

    //auth routes
    app.use('/api', authRoutes)

    //error
    // app.use(error)
}

export default routes;