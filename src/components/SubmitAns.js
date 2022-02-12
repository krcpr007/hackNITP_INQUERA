import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'; 
import { toast } from 'react-toastify';
import AnswerCard from './AnswerCard';
import QueryCard from './QueryCard';
function SubmitAns() {
  const [ansData , setAnsData] = useState([]); 
  const [answer , setAnswer] =useState(' ');
  const auth = localStorage.getItem('inquera-user'); 
  const profileData= JSON.parse(auth)
  const name= profileData.name; 
  const email= profileData.email; 
  const {id}= useParams();
  const queryId = id;
  let likes=0; 
  const [data, setData]= useState({});
  const submitAnswer= async(e)=>{
    e.preventDefault(); 
    let answering = await fetch(`http://localhost:5000/answering`, {
      method:"post", 
      body:JSON.stringify({queryId,answer, name,email,likes}),
      headers: {
        "Content-Type": "application/json",
      },
    })
    answering = await answering.json()
    if(answering){
      console.log(answering); 
      fetchAnswers();
      toast.success("Submited")
    }
  }
  useEffect(async()=>{
    fetchQuery();
    fetchAnswers();
  },[])
  const fetchQuery = async()=>{
    await  fetch(`http://localhost:5000/polls/${id}`)
    .then((resp)=>resp.json())
    .then((data)=>{
      console.log(data); 
      setData(data);
    }).catch((Error)=>{
      console.log(Error); 
    })
  }
  const fetchAnswers= async ()=>{
    await fetch(`http://localhost:5000/answers/${id}`)
    .then((resp)=>resp.json())
    .then((ansData)=>{
        console.log(ansData);
         setAnsData(ansData); 
    }).catch((e)=>{
      console.log(e);
    })

  }
  return (
    <div className=''>
        <div>
        <QueryCard title={data.title} name={data.name} query={data.query} tags={data.tags} name={data.name} email={data.email} _id={data._id} />
        <div className='px-3 md:px-20'>
        {ansData.map((item)=>{
          return <AnswerCard key={item._id} answer={item.answer} email={item.email} name={item.name} likes={item.likes} />
        })}

        </div>
            <div className='container px-10 md:px-40  md:py-10'>
              <form>
                {/* <textarea className='justify-center rounded-lg input border-none border-b-2 border-yellow-300 h-20 w-full bg-slate-800' onChange={(e)=>setAnswer(e.target.value)}/> */}
                <div class="form-control my-1">
                <label class="label">
                </label> 
                <label class="input-group input-group-vertical input-group-lg">
                  <span className='bg-slate-900'>Write your answer</span> 
                  <textarea type="text" placeholder="Type Your answer" class="input input-bordered input-lg w-full h-24" onChange={(e)=>setAnswer(e.target.value)}/>
                </label>
              </div>
                <button type='submit' className='btn btn glass bg-[#04293A]' value={answer} onClick={submitAnswer}> Submit</button>
              </form>
            </div>
        </div>
    </div>

  )
}

export default SubmitAns