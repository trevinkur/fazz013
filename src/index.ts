import * as dotenv from "dotenv"
dotenv.config()
import App from './app';
import { PORT } from './config/env';

const port: number = PORT || 3000

async function bootstrap(app: App): Promise<void> {
    
    app.listen(port, "App running on port: " + port)
}

bootstrap(new App)








