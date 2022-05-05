const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const productRoute = require('./routes/productRoute');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes
app.use('./', productRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
