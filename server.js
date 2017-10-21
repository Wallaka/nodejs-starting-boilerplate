import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from 'morgan';
import config from './config/config.dev';
import connectToDatabase from './config/db';

const port = config.serverPort;

//Connect to the Database if any info is provided
connectToDatabase();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

app.listen(port, () => {
    console.info(`Server started on port ${port} !`);
});
