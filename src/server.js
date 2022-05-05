const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const productsRoute = require('./routes/productsRoute');

const PORT = process.env.SERVER_PORT || 3001;

const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/', productsRoute);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
