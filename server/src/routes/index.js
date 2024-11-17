import { CheckServer } from "../contollers/check.js";



const routes = (app)=> {
    app.use('/api/check',CheckServer );

    //error
    // app.use(error)
}

export default routes;