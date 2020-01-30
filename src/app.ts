import express, {Application, Router} from 'express';

import {ErrorHandler, UndefinedRoute} from 'middlewares/index';

import {ENV} from 'config/index';
import {Route} from 'types/index';

/**
 * A Factory class for express Application
 */
class App {
    public express: Application;
    public router: Router;

    private routes: Route[];

    constructor() {
        this.express = express();
        this.router = express.Router();
        this.routes = new Array<Route>();
    }

    public setStatic(path: string) {
        this.express.use(express.static(path));
    }

    public mountRoutes(routes: Route) {
        this.routes.push(routes);
    }

    public async start(port?: number) {
        // set the express and httpserver
        const app = this.express;

        // call every route
        this.routes.forEach((route) => {
            route(this.router);
        });
        app.use('/', this.router);

        // undefine handler middlewares
        app.use(UndefinedRoute);
        app.use(ErrorHandler);

        //start port
        port = port || ENV.PORT;
        app.listen(port, async () => {
            console.log(`🚀 Server ready at ${port}`);
        });
    }
}

export default new App();