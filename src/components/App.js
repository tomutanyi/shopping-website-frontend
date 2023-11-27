import Navbar from './landing/navbar/Navbar';
import Hero from './landing/hero/Hero';
import TopVendors from './landing/top-vendors/TopVendors';
import CustomerReviews from './landing/customer-reviews/CustomerReviews';
import Footer from './landing/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
