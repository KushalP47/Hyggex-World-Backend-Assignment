import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN     // will only cater to requests from givrn url
}));


app.use(express.urlencoded({extended:true})); // with extended flag, we will get the data at deep level
app.use(bodyParser.json()); // to parse the request in json

import { userRoute } from './routes/user.routes.js';

export { app }
