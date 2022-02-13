import React, {useState} from "react";
import { toast } from "react-toastify";
import {FaHeart} from 'react-icons/fa';
import {AiTwotoneDelete} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';  
function AnswerCard({name, email ,answer,likes,id,fetchAnswerFun, userId}) {
  const auth = localStorage.getItem('inquera-user'); 
  const profileData= JSON.parse(auth)
  // const [yourAnser, setYourAnser] = useState(false); 
  // if(userId == profileData._id) return setYourAnser(true);
  const DeleteAnswer = async() =>{
      console.log(id); 
      await fetch(`http://localhost:5000/delete-answer/${id}`, {
     method:"Delete", 
     headers:{
       'Content-Type':'application/json'
     }, 
     
   })
   fetchAnswerFun();
    toast.success("Deleted");
  }
  return (
    <>
      <div className="bg-slate-700 p-5 rounded-lg my-3 md:mx-20  shadow-2xl">
          <div>
              <h1 className="text-2xl font-medium text-yellow-400">{name}</h1>
              <span className="text-xs font-thin text-yellow-300">{email}</span>
          </div>
          <div className="">

          </div>
          <div className="p-2">
              <p className="font-medium font-serif text-gray-200">{answer}</p>
          </div>
          <div className="flex">
          <button className="bg-transparent m-1 hover:bg-blue-900 text-white font-semibold hover:text-white py-1 px-2 border  hover:border-transparent rounded flex"> <FaHeart className="m-1"/> <span className=""> {likes} </span> </button>
           {
             userId==profileData._id?(<>
              <button className='bg-transparent m-1 hover:bg-blue-900  font-semibold hover:text-white py-1 px-2 border  hover:border-transparent rounded'><FiEdit/></button>
            <button onClick={DeleteAnswer} className='bg-transparent m-1 hover:bg-blue-900 text-white font-semibold hover:text-white py-1 px-2 border  hover:border-transparent rounded'><AiTwotoneDelete/></button>
             </>):null
           }
          </div>
      </div>
    </>
  );
}

export default AnswerCard;
