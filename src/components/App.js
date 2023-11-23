import Navbar from './landing/navbar/Navbar';
import Hero from './landing/hero/Hero';
import TopVendors from './landing/top-vendors/TopVendors';

function App() {
  return (
   <div className='bg-gray-100'>
    <Navbar />
    <Hero />
    <TopVendors />
   </div>
  );
}

export default App;
