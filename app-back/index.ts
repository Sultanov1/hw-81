import express from "express";
import linkRouter from './routes/link';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config';

const app = express();
const port = 8000;

app.use(cors(config.corsOptions));
app.use(express.static('public'));
app.use(express.json());

app.use('/', linkRouter)

const run = async () => {
    await mongoose.connect('mongodb://localhost/links');

    app.listen(port, () => {
      console.log("Listening on port " + port);
    })

    process.on('exit', (err) => {
      mongoose.disconnect();
    })
}

run().catch(console.error);