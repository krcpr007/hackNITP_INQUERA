import React, {useState} from 'react'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'; 
function AddQuery() {
    const auth = localStorage.getItem('inquera-user'); 
    const profileData= JSON.parse(auth)
    const name= profileData.name; 
    const email= profileData.email; 
    const userId= profileData._id; 
    const navigate = useNavigate(); 
    const [title, setTitle] = useState('');
    const [query, setQuery] = useState('');
    const [tags, setTags] = useState(''); 
    const AskQuery= async(e)=>{
        e.preventDefault(); 
    console.warn(title, query, tags); 
     let result= await fetch(`http://localhost:5000/create-query`,{
          method:"post", 
          body:JSON.stringify({ title,query,tags, name,email, userId}),
          headers: {
            "Content-Type": "application/json",
          },
      })
      result = await result.json();
      if(result){
          toast.success("Submited succesfully")
          console.warn(result);
          navigate('/')
      }else{
        toast.error("Something went wrong"); 
      }
    }
  return (
    <>
    <div className='bg-[#0e1e2c]'>
        <div>
          <h1 className='text-xl md:text-3xl pt-3 text-center'>Enter your Query or anything </h1>
        </div>
        <div className="p-5 md:p-10 flex">
        <div className='card-body rounded-3xl bg-slate-800 shadow-2xl lg:w-[40rem]  '>
        <div className='md:px-20 '>
            <form> 
              <div className="form-control lg:w-[30]">
                <label htmlFor="title" className='label'>Title</label>
                <input className='input bg-[#0e1e2c]' onChange={(e)=>setTitle(e.target.value)} placeholder='Title' type="text" />
              </div>
              <div className="form-control lg:w-[30]">
                <label htmlFor="query" className='label'>Query</label>
                <textarea className='input bg-[#0e1e2c]'onChange={(e)=>setQuery(e.target.value)} placeholder='Ask your Query' type="text" />
              </div>
              <div className="form-control w-[30]">
                <label htmlFor="tags" className='label'>Tag</label>
                <input className='input bg-[#0e1e2c]'onChange={(e)=>setTags(e.target.value)} placeholder='Tag' type="text" />
              </div>
              <div className="form-contorl">
              <button type='submit' onClick={AskQuery} className='btn glass my-5 md:w-1/2 bg-[#04293A] '>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className='m-5 md:p-10 lg:w-1/2 '>
          <h3 className='px-2 font-extrabold text-xl md:text-2xl font-serif text-yellow-400'>Community Rules</h3>
            <ul className='pl-7 text-xl list-disc'>
              <li>Stay on topic</li>
              <li>Don't upload or post inappropriate content.</li>
              <li>Stay on topic</li>
              <li>Keep it legal.</li>
              <li>Respect Privacy</li>
              <li>Stay on topic</li>
            </ul>
        </div>
        </div>
    </div>
    </>
  )
}

export default AddQuery