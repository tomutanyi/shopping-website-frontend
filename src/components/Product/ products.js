import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ReactStars from "react-rating-stars-component";

const Products = () => {
  const [vendorProducts, setVendorProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vendorName, setVendorName] = useState('');
  const [productName, setProductName] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [minRating, setMinRating] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    fetch('https://shopping-database32.onrender.com/vendor_products')
      .then((response) => response.json())
      .then((data) => {
        setVendorProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching vendor products:', error));
  }, []);

  const placeholderImageUrl = 'https://i.pinimg.com/474x/8a/2a/73/8a2a73c4e85a9efc11a230e285a0db53.jpg';

  const filteredProducts = vendorProducts.filter(
    (product) =>
      (!selectedFilter || selectedFilter === 'vendorName') && (vendorName === '' || product.vendor.toLowerCase().includes(vendorName.toLowerCase())) ||
      (!selectedFilter || selectedFilter === 'productName') && (productName === '' || product.product.toLowerCase().includes(productName.toLowerCase())) ||
      (!selectedFilter || selectedFilter === 'minRating') && (product.rating >= minRating)
  );

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

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = sortedProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sortedProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % sortedProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='p-4 flex flex-col items-center'>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="mb-4 flex flex-wrap gap-4">
        <div>
          <label htmlFor="filterSelect" className="mr-2">
            Search by:
          </label>
          <select
            id="filterSelect"
            value={selectedFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Select Filter</option>
            <option value="vendorName">Vendor Name</option>
            <option value="productName">Search by Product Name</option>
            <option value="minRating">Min Rating</option>
          </select>
        </div>
        {selectedFilter && (
          <div>
            {selectedFilter === 'vendorName' && (
              <input
                type="text"
                id="vendorNameInput"
                placeholder="Enter vendor name"
                onChange={(e) => setVendorName(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />
            )}
            {selectedFilter === 'productName' && (
              <input
                type="text"
                id="productNameInput"
                placeholder="Enter product name"
                onChange={(e) => setProductName(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />
            )}
            {selectedFilter === 'minRating' && (
              <input
                type="number"
                id="minRatingInput"
                placeholder="Enter min rating"
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="p-2 border border-gray-300 rounded"
              />
            )}
          </div>
        )}
        <div>
          <label htmlFor="sortOrderSelect" className="mr-2">
            Sort by Cost:
          </label>
          <select
            id="sortOrderSelect"
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {currentItems.map((product, index) => (
            <div key={`${product.product_id}_${index}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 border border-gray-300 rounded shadow-md">
              <div className="relative">
                <img
                  src={placeholderImageUrl}
                  alt={`Placeholder for ${product.product}`}
                  className="w-full h-48 object-cover mb-2 rounded-t"
                />
                <div className="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded-tr">
                  {product.discount}% Off
                </div>
              </div>
              <p className="text-lg font-bold mb-2">{product.product}</p>
              <p className="text-sm text-gray-600 mb-2">{product.vendor}</p>
              <p className="text-green-600 font-semibold mb-2">Price: ${product.cost}</p>
              <ReactStars
                count={5}
                isHalf={true}
                value={product.rating}
                edit={false}
              />
              <p className="text-gray-700 mb-2">Delivery Cost: ${product.delivery_cost}</p>
              <p className="text-gray-700 mb-2">Mode of Payment: {product.mode_of_payment}</p>
              <p className="text-gray-700 line-clamp-3">Description: {product.product_description}</p>
            </div>
          ))}
        </div>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center mt-8 pagination"
        activeClassName="bg-blue-500 text-white"
        pageClassName="inline-block mx-2"
        pageLinkClassName="py-2 px-4 border border-gray-300 transition-all duration-300 ease-in-out hover:bg-gray-200"
        previousLinkClassName="py-2 px-4 border border-gray-300 mr-2 transition-all duration-300 ease-in-out hover:bg-gray-200"
        nextLinkClassName="py-2 px-4 border border-gray-300 ml-2 transition-all duration-300 ease-in-out hover:bg-gray-200"
      />
    </div>
  );
};

export default Products;
