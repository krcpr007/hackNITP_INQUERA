import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
function ContactUs() {
    const auth = localStorage.getItem('inquera-user');
    const profileData = JSON.parse(auth);
    const [name, setName] = useState(profileData.name);
    const [email, setEmail] = useState(profileData.email);
    const [msg, setMsg] = useState('');
    useEffect(() => {
        toast.error("Login Firstly");
        setName("");
        setEmail("");
    }, [])
    const handleONSubmit = () => {
        if (msg.length <= 20) {
            toast.error("Please Enter details");
        }
        toast.success("Submitted successfully");
    }
    return (
        <>
            <div className='py-8 bg-[#0e1e2c]'>
                <h1 className='text-5xl text-center'>Contact us</h1>
                <div className="bg-slate-800 shadow-2xl rounded-md mx-20 py-4">
                    <h1 className='text-center text-xl font-medium md:text-3xl py-1 text-rose-400'>Post your suggestions and complaints</h1>
                    <div className="px-5 md:px-24 py-10 text-gray-400">
                        <form action="mailto:rajankumarcpr002@gmail.com" method="post" encType="text/plain" onSubmit={e => e.preventDefault()}>
                            <div className=''>
                                <label className='label text-white' htmlFor="name">Name</label>
                                <input className='input md:w-1/2 :border-slate-900 bg-[#0e1e2c]' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' required />
                            </div>
                            <div className=''>
                                <label className='label text-white' htmlFor="name">Email</label>
                                <input className='input md:w-1/2 bg-[#0e1e2c]' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
                            </div>
                            <div className=''>
                                <label className='label text-white' htmlFor="name">Your message</label>
                                <textarea className='input w-full h-36 bg-[#0e1e2c]' placeholder='Your message' onChange={(e) => setMsg(e.target.value)} rows="5" minLength={20} required />
                            </div>
                            <button className='btn glass bg-[#04293A] ' onClick={handleONSubmit} type='submit' value="Send">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs