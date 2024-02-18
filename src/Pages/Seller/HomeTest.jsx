import React, { useState } from 'react';
import '../CSS/HomeTest.css';

const HomeTest = () => {
  // State for managing products
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');
  const [newProductImage, setNewProductImage] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  // Function to handle product upload
  const handleAddProduct = () => {
    if (newProduct.trim() !== '' && newProductImage.trim() !== '' && newProductPrice.trim() !== '') {
      const newProductId = Date.now(); // Simple method to generate unique IDs
      setProducts([...products, { id: newProductId, name: newProduct, image: newProductImage, price: newProductPrice }]);
      setNewProduct('');
      setNewProductImage('');
      setNewProductPrice('');
    }
  };

  // Function to handle product removal
  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Seller HomePage</h1>
        <p>Seller Adds Products From This Page</p>

        {/* Product upload section */}
        <div className="product-section">
          <input
            type="text"
            placeholder="Enter product name"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter product image URL"
            value={newProductImage}
            onChange={(e) => setNewProductImage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter product price"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
          />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>

        {/* Product list section */}
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-list-item">
              <img src={product.image} alt={product.name} />
              <div>
                <p>{product.name}</p>
                <p>ID: {product.id}</p>
                <p>Price: ${product.price}</p>
                <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomeTest;
