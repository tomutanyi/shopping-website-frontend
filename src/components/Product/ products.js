import React, { useState, useEffect } from 'react';

const Products = () => {
  const [vendorProducts, setVendorProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vendorName, setVendorName] = useState('');
  const [productName, setProductName] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); 

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

  const filteredProducts = vendorProducts.filter(
    (product) =>
      (vendorName === '' || product.vendor.toLowerCase().includes(vendorName.toLowerCase())) &&
      (productName === '' || product.product.toLowerCase().includes(productName.toLowerCase()))
  );

  // Sort filteredProducts by cost
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.cost - b.cost;
    } else {
      return b.cost - a.cost;
    }
  });

  const handleSortOrderChange = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Vendor Products</h1>
      <div>
        <label htmlFor="vendorNameInput" className="mr-2">
          Filter by Vendor Name:
        </label>
        <input
          type="text"
          id="vendorNameInput"
          placeholder="Enter vendor name"
          onChange={(e) => setVendorName(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="productNameInput" className="mr-2">
          Search by Product Name:
        </label>
        <input
          type="text"
          id="productNameInput"
          placeholder="Enter product name"
          onChange={(e) => setProductName(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <button onClick={handleSortOrderChange} className="text-blue-500">
          Sort by Cost {sortOrder === 'asc' ? '↓' : '↑'}
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap -mx-4">
          {sortedProducts.map((product, index) => (
            <div key={`${product.product_id}_${index}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
              <img
                src={placeholderImageUrl}
                alt={`Placeholder for ${product.product}`}
                className="w-full h-32 object-cover mb-2"
              />
              <p className="text-lg font-bold mb-2">{product.product}</p>
              <p>By {product.vendor}</p>
              <p className="text-green-600">Cost: ${product.cost}</p>
              <p>Rating: {product.rating}</p>
              <p>Delivery Cost: ${product.delivery_cost}</p>
              <p>Mode of Payment: {product.mode_of_payment}</p>
              <p>Discount: {product.discount}</p>
              <p>Description: {product.product_description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
