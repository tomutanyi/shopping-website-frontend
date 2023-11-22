import { FaLightbulb } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='p-5 w-full flex flex-row'>
      <div className='w-1/2 py-4 border-2 flex flex-row justify-around'>
        <FaLightbulb className="text-5xl pb-3" />
        <div>About Us</div>
        <div>Review</div>
        <div>Contact Us</div>
        <div>Sign Up</div>
      </div>
      <div className='w-1/2 border-2'>Search bar</div>
    </nav>
  )
}

export default Navbar