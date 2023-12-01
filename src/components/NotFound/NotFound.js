import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    let navigate = useNavigate()
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-center mb-4 text-5xl font-bold'>404</h1>
        <h1 className='text-center mb-4 text-2xl'>Sorry, the page you are looking for is not found on the server</h1>
        <button className='bg-none text-black border-2 border-black hover:bg-black hover:text-white py-1 px-4 rounded-lg' onClick={()=>{navigate('/')}}>Take me Home</button>
    </div>
  )
}

export default NotFound