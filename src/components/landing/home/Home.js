import Hero from "../hero/Hero"
import TopVendors from "../top-vendors/TopVendors"
import CustomerReviews from "../customer-reviews/CustomerReviews"

function Home() {
  return (
    <div>
        <Hero />
        <TopVendors />
        <CustomerReviews />
    </div>
  )
}

export default Home