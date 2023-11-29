import React, { useState, useEffect } from 'react';

const Products = () => {
  const [vendorProducts, setVendorProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/vendor_products')
      .then((response) => response.json())
      .then((data) => {
        setVendorProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching vendor products:', error));
  }, []);

  const placeholderImageUrl = 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_640.jpg'; 

  return (
    <div>
      <h1>Vendor Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {vendorProducts.map((product) => (
            <li key={product.product_id}>
              <img
                src={placeholderImageUrl}
                alt={`Placeholder for ${product.product}`}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <strong>{product.product}</strong> by {product.vendor} - Cost: ${product.cost}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
