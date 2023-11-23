import amazon from './amazon-logo.webp'
import ebay from './ebay.png'
import shopify from './Shopify.png'

function TopVendors() {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold mb-5'>Top Vendors</h1>
        <div className='flex flex-row justify-around w-full p-10'>
            <div className='w-1/3 flex flex-col justify-center items-center'>
                <img src={amazon} alt='' className='w-1/2'/>
                <p className='text-2xl font-bold py-5'>Amazon</p>
            </div>
            <div className='w-1/3 flex flex-col justify-center items-center'>
                <img src={ebay} alt='' className='w-1/2'/>
                <p className='text-2xl font-bold py-5'>eBay</p>
            </div>
            <div className='w-1/3 flex flex-col justify-center items-center'>
                <img src={shopify} alt='' className='w-1/2' />
                <p className='text-2xl font-bold py-5'>Shopify</p>
            </div>
        </div>
    </div>
  )
}

export default TopVendors