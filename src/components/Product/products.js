import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import ReactPaginate from 'react-paginate';

const Products = ({ user }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [vendorName, setVendorName] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for low to high, 'desc' for high to low
  const [sortBy, setSortBy] = useState('cost'); // Default sort by price
  const [minRating, setMinRating] = useState(0); // Minimum rating filter

  const itemsPerPage = 8; // Change this based on your preference
  const pageCount = result ? Math.ceil(result.length / itemsPerPage) : 0;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSortChange = (sortBy) => {
    if (sortBy === sortBy) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(sortBy);
      setSortOrder('asc');
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);

      // Fetch vendor products
      const response = await fetch(
        `https://shopping-database32.onrender.com/vendor_products?product_name=${query}`
      );
      const data = await response.json();
      setResult(data);
      setCurrentPage(0);

      // Post the query to the user's search queries endpoint
      if (user) {
        await fetch(`https://shopping-database32.onrender.com/users/${user.id}/search_queries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ search_query: query }),
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const placeholderImageUrl =
    'https://i.pinimg.com/474x/8a/2a/73/8a2a73c4e85a9efc11a230e285a0db53.jpg';

  const filteredResults = result
    ? result.filter(
        (item) =>
          item.rating >= minRating &&
          (vendorName === '' || item.vendor.toLowerCase().includes(vendorName.toLowerCase()))
      )
    : [];

  const sortedResults = filteredResults
    ? filteredResults.slice().sort((a, b) => {
        if (sortOrder === 'asc') {
          return a[sortBy] - b[sortBy];
        } else {
          return b[sortBy] - a[sortBy];
        }
      })
    : [];

  const paginatedResults = sortedResults.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="container mx-auto mt-8 max-w-.5xl px-1">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter product name"
          className="border border-gray-300 p-2 mr-2 w"
        />
        <button onClick={handleSearch} disabled={loading} className="bg-blue-500 text-white p-2">
          Search
        </button>
        <label className="ml-4 mr-2">Minimum Rating:</label>
        <input
          type="number"
          value={minRating}
          onChange={(e) => setMinRating(parseInt(e.target.value))}
          min={0}
          max={5}
          step={1}
          className="border border-gray-300 p-2"
        />
        <label className="ml-4 mr-2">Vendor Name:</label>
        <input
          type="text"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
          placeholder="Enter vendor name"
          className="border border-gray-300 p-2"
        />
      </div>

      {loading && <p className="text-gray-700">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {result && (
        <div>
          <h2 className="text-2xl font-bold mb-4 center">Search Results</h2>

          <div className="flex items-center mb-4">
            <label className="mr-2">Sort by Price:</label>
            <select
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
              className="border border-gray-300 p-2"
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>

          <div className='flex flex-wrap justify-center gap-4'>
            {paginatedResults.map((item) => (
              <div key={item.vendor_id} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4 border border-gray-300 rounded shadow-md'>
                <div className="relative">
                  <img
                    src={item.image_url === 'http://example.com' ? placeholderImageUrl : item.image_url}
                    alt={`Placeholder for ${item.product}`}
                    className="w-full h-48 object-cover mb-2 rounded-t"
                  />
                  <div className="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded-tr">
                    {item.discount}% Off
                  </div>
                </div>
                <p className="text-lg font-bold mb-2">{item.product}</p>
                <p className="text-sm text-gray-600 mb-2">{item.vendor}</p>
                <p className="text-green-600 font-semibold mb-2">Price: ${item.cost}</p>
                <ReactStars count={5} isHalf={true} value={item.rating} edit={false} />
                <p className="text-gray-700 mb-2">Delivery Cost: ${item.delivery_cost}</p>
                <p className="text-gray-700 mb-2">Mode of Payment: {item.mode_of_payment}</p>
                <p className="text-gray-700 line-clamp-3">Description: {item.product_description}</p>
              </div>
            ))}
          </div>

          {pageCount > 1 && (
            <ReactPaginate
            breakLabel='...'
            nextLabel='next >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='< previous'
            renderOnZeroPageCount={null}
            containerClassName='flex justify-center items-center mt-8 pagination'
            activeClassName='bg-blue-500 text-white'
            pageClassName='inline-block mx-2'
            pageLinkClassName='py-2 px-4 border border-gray-300 transition-all duration-300 ease-in-out hover:bg-gray-200'
            previousLinkClassName='py-2 px-4 border border-gray-300 mr-2 transition-all duration-300 ease-in-out hover:bg-gray-200'
            nextLinkClassName='py-2 px-4 border border-gray-300 ml-2 transition-all duration-300 ease-in-out hover:bg-gray-200'
          />
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
