import express from 'express'
const app = express();
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';


import Connection from './databases/db.js'
import data from './data.js'
import Router from './routes/route.js'

//config .env
dotenv.config({ path: './databases/config.env' });

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)
//port
const PORT = process.env.PORT;
Connection();

app.listen(PORT, () => {
    console.log(`Server is working on :${PORT}`);
})

data()