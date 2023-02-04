import React from 'react'
import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
import {FaYoutubeSquare} from 'react-icons/fa';
import logo from './logo.png'
function Footer() {
 
  return (
    <footer className="p-10 footer bg-slate-900 text-neutral-content">
  <div>
    {/* logo with title of website  */}
    <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white flex">
            <h3 className="px-2 font-extrabold text-3xl font-serif flex">In<img src={logo} className="h-8" alt='logo' />uera</h3>
          </span>
    <p className='font-medium text-[#FFE400]'>Inquera Pvt Ltd.
      <br/>All copyrights reserved @Inquera {'2022'}
    </p>
  </div> 
  <div>
    <span className="footer-title">Social Links</span> 
    <div className="grid grid-flow-col gap-4 text-[#FFE400]">
      <a href='https://www.facebook.com'>
       <FaFacebookSquare size="30"/>
      </a> 
      <a href='https://www.youtube.com'>
        <FaYoutubeSquare size={30}/>
      </a> 
      <a href='https://www.twitter.com'>
        <FaTwitterSquare size={30}/>
      </a>
    </div>
  </div>
</footer>
  )
}

export default Footer