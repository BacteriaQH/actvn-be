const express = require('express');

const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const viewEngine = require('./config/viewEngine');
const initWebRoutes = require('./routes/index');

const conn = require('./config/conn');

//config app
dotenv.config();

const app = express();
const corsOptions = {
    origin: process.env.REACT_APP_URL,
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('hello api');
});

conn();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
