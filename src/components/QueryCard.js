import React from 'react'
import {Link } from 'react-router-dom'; 
function QueryCard({title,query, tags, name, email ,_id}) {
  return (
  <div className="mx-40 border-2 border-[#0e1e2c] border-b-yellow-400 ">
    <Link to={`/polls/${_id}`}>
      <div className="flex w-full px-4 py-5 bg-cover  bg-[#0c1824]">
      <div className="text-neutral-content bg-[#0f2b44]">
        <div className="w-fit card-body m-0">
          <h1 className="card-title text-xl font-extrabold text-2x">{title}</h1> 
          <p className='text-[#FFE400] font-bold'>{name} </p>
          <p>{query}</p> 
          <div className="card-actions">
            <button className="bg-transparent hover:bg-blue-900 text-blue-800 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded">Upvote 💙</button>
          </div>
        </div>
      </div>
    </div>
    </Link>
</div>
  )
}

export default QueryCard
