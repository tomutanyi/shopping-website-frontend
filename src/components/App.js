import Navbar from './landing/navbar/Navbar';
import Hero from './landing/hero/Hero';
import TopVendors from './landing/top-vendors/TopVendors';
import CustomerReviews from './landing/customer-reviews/CustomerReviews';
import Footer from './landing/footer/Footer';

function App() {
  return (
   <div className='bg-gray-100'>
    <Navbar />
    <Hero />
    <TopVendors />
    <CustomerReviews />
    <Footer />
   </div>
  );
}

export default App;
