import React from 'react'
import {Link } from 'react-router-dom'; 
function QueryCard({title,query, tags, name, email ,_id}) {
  return (
  <div className="md:mx-40 border-2 border-[#0e1e2c] border-b-yellow-400 p-1 ">
    <Link to={`/polls/${_id}`}>
      <div className="flex w-full px-4 py-5 bg-cover  bg-[#0c1824]">
      <div className="flex w-full px-4 py-5 bg-cover bg-[#0f2b44] ">
        <div className="card-body  px-5">
          <h1 className="card-title font-bold text-2xl underline text-gray-300">{title}</h1> 
          <p className='text-[#FFE400] font-bold text-xl '>{name} </p>
          <p className='font-medium text-gray-200'>{query}</p> 
          <div className="card-actions">
            <button className="bg-transparent hover:bg-blue-900 text-blue-800 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded">💙</button>
          </div>
        </div>
      </div>
    </div>
    </Link>
</div>
  )
}

export default QueryCard
