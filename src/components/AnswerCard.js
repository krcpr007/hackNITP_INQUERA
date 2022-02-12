import React from "react";
import {FaHeart} from 'react-icons/fa'
function AnswerCard({name, email ,answer,likes}) {
  return (
    <>
      <div className="bg-slate-900 p-5 rounded-lg my-3 md:mx-20  shadow-2xl">
          <div>
              <h1 className="text-2xl font-medium text-yellow-400">{name}</h1>
              <span className="text-xs font-thin text-yellow-300">{email}</span>
          </div>
          <div className="">

          </div>
          <div className="p-2">
              <p>{answer}</p>
              <button className="flex py-2 border-2 px-5 rounded-md hover:text-yellow-300 hover:border-yellow-300"> <FaHeart className="m-1"/> <span className=""> {likes} </span> </button>
          </div>
      </div>
    </>
  );
}

export default AnswerCard;
