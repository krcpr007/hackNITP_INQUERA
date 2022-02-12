import React, {useState} from 'react'
import { toast } from 'react-toastify';

function AddQuery() {
    const auth = localStorage.getItem('inquera-user'); 
    const profileData= JSON.parse(auth)
    const name= profileData.name; 
    const email= profileData.email; 
    const [title, setTitle] = useState('');
    const [query, setQuery] = useState('');
    const [tags, setTags] = useState(''); 
    const AskQuery= async(e)=>{
        e.preventDefault(); 
    console.warn(title, query, tags); 
     let result= await fetch(`http://localhost:5000/create-query`,{
          method:"post", 
          body:JSON.stringify({ title,query,tags, name,email}),
          headers: {
            "Content-Type": "application/json",
          },
      })
      result = await result.json();
      if(result){
          toast.success("Submited succesfully")
          console.warn(result);
      }else{
        toast.error("Something went wrong"); 
      }
    }
  return (
    <>
    <div className=''>
        <div>
          <h1 className='text-xl md:text-3xl text-center'>Ask your Query or anything </h1>
        </div>
        <div className="p-5 md:p-10">
        <div className='card-body rounded-3xl bg-slate-800 shadow-2xl'>
        <div className='md:px-20'>
            <form> 
              <div className="form-control">
                <label htmlFor="title" className='label'>Title</label>
                <input className='input bg-slate-900' onChange={(e)=>setTitle(e.target.value)} placeholder='Title' type="text" />
              </div>
              <div className="form-control">
                <label htmlFor="query" className='label'>Query</label>
                <textarea className='input bg-slate-900'onChange={(e)=>setQuery(e.target.value)} placeholder='Ask your Query' type="text" />
              </div>
              <div className="form-control">
                <label htmlFor="tags" className='label'>Tag</label>
                <input className='input bg-slate-900'onChange={(e)=>setTags(e.target.value)} placeholder='Tag' type="text" />
              </div>
              <div className="form-contorl">
              <button type='submit' onClick={AskQuery} className='btn glass my-5 md:w-1/2 bg-[#04293A] '>Submit</button>
              </div>
            </form>
          </div>

        </div>
        </div>
    </div>
    </>
  )
}

export default AddQuery