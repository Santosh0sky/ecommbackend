const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Serve HTML view for products
app.get('/api/products', (req, res) => {
  res.sendFile(require('path').join(__dirname, 'VIEW', 'products.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
