
const validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  // basic validation: existence + price is number
  if (!name || price === undefined) {
    return res.status(400).json({ message: 'Validation error: name and price are required' });
  }
  if (typeof price !== 'number') {
    // try to coerce if client sent string
    const coerced = Number(price);
    if (Number.isNaN(coerced)) return res.status(400).json({ message: 'Validation error: price must be a number' });
    req.body.price = coerced;
  }
  next();
};

module.exports = validateProduct;