import { CiFacebook, CiYoutube, CiTwitter, CiInstagram } from "react-icons/ci";


function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
        <footer className='bg-blue-500 text-white px-10 py-5 flex flex-col'>
            <div className='flex flex-row justify-evenly'>
                <div className='flex flex-col'>
                    <h1 className='mb-2 font-bold'>Subscribe to our Newsletter</h1>
                    <div className='flex'>
                        <input class="appearance-none bg-transparent border-b-2 w-full  mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="example@email.com" aria-label="Email address"/>
                        <button class="flex-shrink-0 bg-transparent hover:bg-white hover:text-blue-500 border text-sm text-white py-1 px-2 rounded" type="button">
                        Subscribe
                        </button>
                    </div>
                   
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-bold'>Quick Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Register</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center text-3xl m-5'>
                <CiFacebook className="mx-3 transition duration-300 transform hover:scale-110 hover:text-blue-300 hover:cursor-pointer" />
                <CiTwitter className="mx-3 transition duration-300 transform hover:scale-110 hover:text-blue-300 hover:cursor-pointer"/>
                <CiInstagram className="mx-3 transition duration-300 transform hover:scale-110 hover:text-blue-300 hover:cursor-pointer"/>
                <CiYoutube className="mx-3 transition duration-300 transform hover:scale-110 hover:text-blue-300 hover:cursor-pointer"/>
            </div>
            <div className='text-center text-sm'>
                <p>&copy; {currentYear} Shoppers. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer