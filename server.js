const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');

const connectDB = require('./db');
const productRoutes = require('./productRoutes');

const logger = require('./logger');
const auth = require('./auth'); 
const validateProduct = require('./validateProduct');
const { notFound, errorHandler } = require('./errorHandler');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(logger);
app.use(morgan('dev'));


app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my Week 2 Assignment API!', requestId: uuidv4() });
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(res.statusCode || 500).json({ message: err.message || 'Server Error' });
});