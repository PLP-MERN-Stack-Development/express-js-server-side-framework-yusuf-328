// auth.js
module.exports = (req, res, next) => {
  // Accept token in header: Authorization: Bearer <token> or x-api-key
  const header = req.headers.authorization || req.headers['x-api-key'];
  if (!header) return res.status(401).json({ message: 'Unauthorized: missing token' });

  const token = header.startsWith('Bearer ') ? header.split(' ')[1] : header;
  // For assignment/demo, use an env var API_KEY
  if (!process.env.API_KEY) return res.status(500).json({ message: 'Server misconfigured: no API_KEY' });
  if (token !== process.env.API_KEY) return res.status(403).json({ message: 'Forbidden: invalid token' });

  next();
};