import logo from './logo.webp'

function Navbar() {
  return (
    <div className="flex p-5">
      <div className="w-1/12">
        <img src={logo} className="w-20 h-20 mr-5" alt=''/>
      </div>
      <nav className=' w-full flex flex-row'>
        <div className='w-1/2 py-4 flex flex-row justify-between px-5'>
          {/* <FaLightbulb className="text-5xl pb-3" /> */}
          
          <div>About Us</div>
          <div>Reviews</div>
          <div>Contact Us</div>
          <div>Sign Up</div>
        </div>
        <div className='w-1/2 p-5'>Search bar</div>
      </nav>
    </div>
  )
}

export default Navbar