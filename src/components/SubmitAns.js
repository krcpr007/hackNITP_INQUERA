import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'; 
function SubmitAns() {
  const {id}= useParams();
  const [data, setData]= useState({}); 
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
          <div>
            {data.name}
            <br />
            {data.email}
            <br />
            {data.query}
          </div>
            <div className='container md:px-96  md:py-28'>
              <h1>add your answer</h1>
                <textarea className='justify-center rounded-lg input bg-yellow-500'  rows='25' />
            </div>
        </div>
    </div>

  )
}

export default SubmitAns