import React, { useState, useEffect } from 'react';
import Product from './Product';

function Catalogue() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from JSON file (replace with your file path)
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Inline styles
  const productCardStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
    maxWidth: '200px',
    textAlign: 'center',
  };

  return (
    <div>
      <h1>Catalogue</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.Name} style={productCardStyle}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
