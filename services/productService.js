// In-memory storage for products
let products = [];

exports.getAllProducts = () => {
  return products;
};

exports.addProduct = (productData) => {
  // Add ID to the product
  const product = {
    id: products.length + 1,
    ...productData,
    createdAt: new Date()
  };
  products.push(product);
  return product;
};

exports.getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};
