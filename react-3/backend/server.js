const express = require('express');
const connectDb = require('./config');
const app = express();
const cors = require('cors');
require('dotenv').config();
const contactRoutes = require('./routes/contactRoutes')
const port = process.env.PORT || 3001;
connectDb()
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', contactRoutes)

app.listen(port, () => {
    console.log("running on port",port);
})
