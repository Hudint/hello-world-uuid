import Utils from "./Utils";
import { v4 as uuidv4 } from 'uuid';
import * as express from 'express'

const uuid = uuidv4()
const message = Utils.getEnvOrDefault("MESSAGE", "Hello World!")

const app = express()
app.get('/', (req, res) => {
    res.send(`Start UUID: ${uuid} - ${message}`)
})
app.listen(Number.parseInt(Utils.getEnvOrDefault("PORT", "3000")))