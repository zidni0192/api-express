import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import xss from 'x-xss-protection'
import dotenv from 'dotenv'
import {generateRoutes} from "./routes/index.js";
import {tokenValidation} from "./middlewares/auth.js";

dotenv.config()

express.application.prefix = express.Router.prefix = function (path, configure) {
    var router = express.Router();
    this.use(path, router);
    router.all('*',tokenValidation)
    configure(router);
    return router;
};

const port = process.env.PORT || 3300
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(xss())
app.use(cors())

app.listen(port, () => {
    console.log(`We are running on port ${port}`)
})

generateRoutes(app)
