import express, {Express, Request, Response} from 'express'
import { AppController } from './app.controller'
import MainRoute from './app.route'
import bodyParser from 'body-parser'

class App {
    constructor(
        readonly app: Express = express(),
        private mainRoute: MainRoute = new MainRoute()
    ) {
        this.plugin()
        this.mainRoute.inititalizeRoute(this.app)
    }
    
    protected plugin() {
        this.app.use(bodyParser.urlencoded({extended: true}))
        this.app.use(bodyParser.json())
    }

    public listen(port: number, message: string) {
        this.app.listen(port, () => {
            console.log(message)
        })
    }
    
}

export default App