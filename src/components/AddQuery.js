import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function AddQuery() {
  const profileData = JSON.parse(localStorage.getItem('inquera-user'))
  const name = profileData.name;
  const email = profileData.email;
  const userId = profileData._id;
  const navigate = useNavigate();
  const [queryForm, setQueryForm] = useState({
    title: '',
    query: '',
    tags: '',
  })
  const AskQuery = async (e) => {
    const { title, query, tags } = queryForm;
    e.preventDefault();
    try {
      let result = await fetch(`https://inquera.onrender.com/create-query`, {
        method: "post",
        body: JSON.stringify({ title, query, tags, name, email, userId }),
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
      })
      result = await result.json();
      if (result) {
        toast.success("Submitted successfully")
        navigate('/')
      } else {
        toast.error("Something went wrong");
      }

    } catch (e) {
      console.log(e)
    }
  }
  // function for dealing... with input
  const handleInput = (e) => {
    setQueryForm({ ...queryForm, [e.target.name]: e.target.value })

  }
  return (
    <>
      <div className='bg-[#0e1e2c]'>
        <div>
          <h1 className='text-xl md:text-3xl pt-3 text-center text-white'>Ask your Query or anything </h1>
        </div>
        <div className="p-5 md:p-10 md:flex ">
          <div className='card-body rounded-3xl bg-slate-800 shadow-2xl lg:w-[40rem]  '>
            <div className='md:px-20 '>
              <form>
                <div className="form-control lg:w-[30]">
                  <label htmlFor="title" className='label'>Title</label>
                  <input className='input bg-[#0e1e2c] text-white' name='title' onChange={handleInput} value={queryForm.title} placeholder='Title' type="text" required />
                </div>
                <div className="form-control lg:w-[30]">
                  <label htmlFor="query" className='label'>Query</label>
                  <textarea className='input bg-[#0e1e2c] text-white' name='query' onChange={handleInput} value={queryForm.query} placeholder='Ask your Query' type="text" required />
                </div>
                <div className="form-control w-[30]">
                  <label htmlFor="tags" className='label'>Tag</label>
                  <input className='input bg-[#0e1e2c] text-white' name='tags' onChange={handleInput} value={queryForm.tags} placeholder='Tag' type="text" required />
                </div>
                <div className="form-contorl">
                  <button type='submit' onClick={AskQuery} className='btn glass my-5 md:w-1/2 bg-[#04293A] '>Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className='m-5 md:p-10 lg:w-1/2 '>
            <h3 className='px-2 font-extrabold text-xl md:text-2xl font-serif text-yellow-400 underline'>Community Rules</h3>
            <ul className='pl-7 text-xl list-disc text-gray-400'>
              <li>Don't upload or post inappropriate content.</li>
              <li>Stay on topic</li>
              <li>Keep it legal.</li>
              <li>Respect Privacy</li>
              <li>No spam</li>
              <li>Please Add <span className='text-rose-500 font-extrabold'>?</span> in Your query</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddQuery