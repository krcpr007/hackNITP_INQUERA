import React, { useEffect, useState } from 'react'
import QueryCard from './QueryCard';

function YoursQuery() {
  const auth = localStorage.getItem('inquera-user'); 
  const profileData= JSON.parse(auth)
  const userId= profileData._id; 
  const [data, setData] = useState([]);
  const yourQueries = async ()=>{
    let result =    await fetch(`https://inquera.onrender.com/yours-query`,{
      method:"post", 
      body:JSON.stringify({userId}),
      headers: {
        "Content-Type": "application/json",
      },
     })
     result = await result.json();
     setData(result);
  }
  useEffect(()=>{
    yourQueries();
  },[])
  return (
    <>
     <div className=''>
       {data.length===0?(<>
         <div className='h-screen'>
           <h1 className='text-center text-xl md:text-4xl text-rose-400 font-serif'>
             Not posted any Query yet
           </h1>
         </div>
       </>):null}
       <div>
         {data.map((item)=>{
            return <QueryCard key={item._id} title={item.title} query={item.query} _id={item._id} name={item.name} YoursQuery={true} yourQueriesFun={yourQueries} tags={item.tags} />
         })}
       </div>
     </div>
    </>
  )
}

export default YoursQuery