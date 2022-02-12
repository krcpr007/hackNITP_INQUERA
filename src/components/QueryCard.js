import React from 'react'
import {Link } from 'react-router-dom'; 
function QueryCard({title,query, tags, name, email ,_id}) {
  // const  = item; 
  return (
  <div className="card lg:card-side card-bordered text m-11">
    <Link to={`/polls/${_id}`}>
      <div className="flex items-center w-full px-4 py-5 bg-cover card bg-slate-700">
      <div className="card-body  lg:card-side text-neutral-content">
        <div className="w-fit card-body">
          <h2 className="card-title text-stone-900 font-extrabold text-2x">{title}</h2> 
          <p className='text-[#FFE400] font-extrabold'>{name} </p>
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
