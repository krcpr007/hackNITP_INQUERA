import React from 'react'
import logo from './lost.gif';
import {Link} from 'react-router-dom'
function Error() {
  return (
    <div className='hero bg-[#000003]'>
      <div className="flex-col justify-center hero-content lg:flex-row h-screen">
        <div className="text-center lg:text-left h-60  md:px-20">
          <h1 className="mb-2 text-5xl font-bold text-red-400 text-center" >404</h1>
            <h1 className="mb-5 text-5xl font-bold text-[#FFE400] text-center mt-11" >Page not found</h1>
            <p className="mb-5 text-center">
            We Could'nt find the page you are looking for...  
            <Link to='/' className='text-[#FFE400] font-medium'>go back</Link>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-[#061229]">
          <img src={logo} className="h-max w-max" alt='404.gif' />
        </div>
      </div>
    </div>
  )
}

export default Error
