import React from 'react';
function ContactUs() {
  return (
<>
    <div className='my-8'>
        <h1 className='text-5xl text-center'>Contact us</h1>
        <div className="bg-slate-800 shadow-2xl rounded-md m-5 ">
                <h1 className='text-center text-xl font-medium md:text-3xl py-1'>help Inquera to improve thier workbench</h1>
            <div className="px-5 md:px-24 py-10 text-gray-400">
            <form className=''>
                <div className=''>
                    <label className='label' htmlFor="name">Name</label>
                    <input className='input md:w-1/2 :border-slate-900' type="text" placeholder='Name' />
                </div>
                <div className=''>
                    <label className='label' htmlFor="name">Email</label>
                    <input className='input md:w-1/2' placeholder='Email' type="text" />
                </div>
                <div className=''>
                    <label className='label' htmlFor="name">Your message</label>
                    <textarea className='input w-full h-36'placeholder='Your message' rows="5" />
                </div>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactUs