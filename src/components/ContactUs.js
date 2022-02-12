import React, {useState, useEffect} from 'react';
function ContactUs() {
    const auth = localStorage.getItem('inquera-user'); 
    const profileData= JSON.parse(auth); 
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [msg, setMsg] = useState(''); 
   useEffect(() => {
     if(auth){
        setName(profileData.name); 
        setEmail(profileData.email);
    }else{
        setName(""); 
        setEmail(""); 
    }
   }, [])
  return (
<>
    <div className='my-8'>
        <h1 className='text-5xl text-center'>Contact us</h1>
        <div className="bg-slate-800 shadow-2xl rounded-md m-5 ">
                <h1 className='text-center text-xl font-medium md:text-3xl py-1'>Post your suggestions and complaints</h1>
            <div className="px-5 md:px-24 py-10 text-gray-400">
            <form className='' onSubmit={e=>e.preventDefault()}>
                <div className=''>
                    <label className='label' htmlFor="name">Name</label>
                    <input className='input md:w-1/2 :border-slate-900' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' />
                </div>
                <div className=''>
                    <label className='label' htmlFor="name">Email</label>
                    <input className='input md:w-1/2' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} type="text" />
                </div>
                <div className=''>
                    <label className='label' htmlFor="name">Your message</label>
                    <textarea className='input w-full h-36'placeholder='Your message' onChange={(e)=>setMsg(e.target.value)} rows="5" />
                </div>
                <button className='btn btn glass bg-[#04293A] active:loading' type='submit'>Submit</button>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactUs