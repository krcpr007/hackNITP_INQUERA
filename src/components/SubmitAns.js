import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'; 
import { toast } from 'react-toastify';
import QueryCard from './QueryCard';
function SubmitAns() {
  const auth = localStorage.getItem('inquera-user'); 
  const profileData= JSON.parse(auth)
  const name= profileData.name; 
  const email= profileData.email; 
  const userId= profileData._id;
  const {id}= useParams();
  const queryId = id;
  let likes=0; 
  const [data, setData]= useState({});
  const [answer , setAnswer] =useState(' '); 
  const submitAnswer= async(e)=>{
    e.preventDefault(); 
    let answer = await fetch(`http://localhost:5000/answering`, {
      method:"post", 
      body:JSON.stringify({queryId,answer, name,email,likes}),
      headers: {
        "Content-Type": "application/json",
      },
    })
    answer = await answer.json()
    if(answer){
      console.log(answer); 
      toast.success("Submited")
    }
  }
  useEffect(async()=>{
     await  fetch(`http://localhost:5000/polls/${id}`)
      .then((resp)=>resp.json())
      .then((data)=>{
        console.log(data); 
        setData(data);
      }).catch((Error)=>{
        console.log(Error); 
      })
  },[])
  return (
    <div>
        <div>
        <QueryCard title={data.title} name={data.name} query={data.query} tags={data.tags} name={data.name} email={data.email} _id={data._id} />

            <div className='container px-10 md:px-96  md:py-28'>
              <h1>Add your answer</h1>
              <form>
                <textarea className='justify-center rounded-lg input h-20 w-full bg-slate-800' onChange={(e)=>setAnswer(e.target.value)}/>
                <button type='submit' className='btn btn glass bg-[#04293A]' value={answer} onClick={submitAnswer}> Submit</button>
              </form>
            </div>
        </div>
    </div>

  )
}

export default SubmitAns