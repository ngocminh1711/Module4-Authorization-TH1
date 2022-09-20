import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routers from "./src/router/routers";
import router from "./src/router/routers";


const PORT = 8000;
const app = express();

app.use(bodyParser.json());
const DB_URL = 'mongodb://localhost:27017/dbtest';

mongoose.connect(DB_URL)
    .then(()=> console.log('DB Connected'))
    .catch((err)=> console.log(err.message));


app.use('/api',router)
app.listen(PORT, function () {
    console.log('http://localhost:'+PORT);
});

