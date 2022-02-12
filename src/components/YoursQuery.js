import React, { useEffect, useState } from 'react'
import QueryCard from './QueryCard';

function YoursQuery() {
  const auth = localStorage.getItem('inquera-user'); 
    const profileData= JSON.parse(auth)
    const userId= profileData._id; 
  const [data, setData] = useState([]);
  useEffect(async()=>{
     let result =    await fetch(`http://localhost:5000/yours-query`,{
      method:"post", 
      body:JSON.stringify({userId}),
      headers: {
        "Content-Type": "application/json",
      },
     })
     result = await result.json();
     console.log(result);
     setData(result);
        

  },[])
  return (
    <>
     <div>
       <div>
         {data.map((item)=>{
            return <QueryCard key={item._id} title={item.title} query={item.query} _id={item._id} name={item.name} />
         })}
       </div>
     </div>
    </>
  )
}

export default YoursQuery