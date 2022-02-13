import React from 'react'; 
import {AiTwotoneDelete} from 'react-icons/ai'; 
import {FiEdit} from 'react-icons/fi'; 
import {Link } from 'react-router-dom'; 
import { toast } from 'react-toastify';
function QueryCard({title,query, tags, name, email ,_id, YoursQuery ,yourqueriesFun}) {
  const handleDeleteQuery= async()=>{
    console.log(_id);
    await fetch(`http://localhost:5000/delete-query/${_id}`, {
     method:"Delete", 
     headers:{
       'Content-Type':'application/json'
     }, 
     
   })
    toast.success("Deleted");
    yourqueriesFun();
  }
  return (
  <div className="md:mx-40 border-2 border-[#0e1e2c] border-b-yellow-400 p-1 ">
      <div className="flex w-full px-4 py-5 bg-cover  bg-[#0c1824] ">
      <div className="flex w-full px-4 py-5 bg-cover bg-[#0f2b44] ">
        <div className="card-body  px-5">
    <Link to={`/polls/${_id}`}>
          <h1 className="card-title font-bold text-2xl underline text-gray-300">{title}</h1> 
          <p className='text-[#FFE400] font-bold text-xl '>{name} </p>
          <p className='font-medium text-gray-200'>{query}</p> 
    </Link>
          <div className="card-actions">
           
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default QueryCard
