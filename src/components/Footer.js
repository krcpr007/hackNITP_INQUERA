import React from 'react'
import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
import {FaYoutubeSquare} from 'react-icons/fa'
function Footer() {
  return (
    <footer className="p-10 footer bg-slate-900 text-neutral-content">
  <div>
    {/* logo with title of website  */}
    <h1 className='font-bold text-xl'>InQuera </h1> 
    <p>Inquera pvt ltd.
      <br/>All copyrights reseverd @Inquera
    </p>
  </div> 
  <div>
    <span className="footer-title">Social Links</span> 
    <div className="grid grid-flow-col gap-4">
      <a>
       <FaFacebookSquare size="30"/>
      </a> 
      <a>
        <FaYoutubeSquare size={30}/>
      </a> 
      <a>
        <FaTwitterSquare size={30}/>
      </a>
    </div>
  </div>
</footer>
  )
}

export default Footer