import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaHeart } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
function AnswerCard({ name, email, answer, likes, id, fetchAnswerFun, userId }) {
  const [newAns, setNewAns] = useState(answer);
  const auth = localStorage.getItem('inquera-user');
  const profileData = JSON.parse(auth);
  const DeleteAnswer = async () => {
    const yes = window.confirm("Are you sure want to delete?")
    if (yes) {
      await fetch(`https://inquera.onrender.com/delete-answer/${id}`, {
        method: "Delete",
        headers: {
          'Content-Type': 'application/json'
        },

      })
      fetchAnswerFun();
      toast.success("Deleted");
    }
  }
  const updateAnswer = async () => {
    const yes = window.confirm("Are you sure want to Update?")
    if (yes) {
      let update = await fetch(`https://inquera.onrender.com/answer-edit/${id}`, {
        method: "put",
        body: JSON.stringify({ answer: newAns }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      update = await update.json();
      if (update) {
        fetchAnswerFun();
        toast.success("Updated");
      }
    }
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
          <button className="bg-transparent m-1 hover:bg-blue-900 text-white font-semibold hover:text-white py-1 px-2 border  hover:border-transparent rounded flex"> <FaHeart className="m-1" /> <span className=""> {likes} </span> </button>
          {
            userId === profileData._id ? (<>
              <label htmlFor="my-modal-2" className="modal-button bg-transparent m-1 hover:bg-blue-900 text-white font-semibold hover:text-white py-2 px-2 border  hover:border-transparent rounded cursor-pointer ">
                <FiEdit />
              </label>
              <input type="checkbox" id="my-modal-2" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <form action="">
                    <label className="input-group input-group-vertical input-group-lg">
                      <span className='bg-slate-900'>Update your answer</span>
                      <textarea type="text" placeholder="Type Your answer" className="input input-bordered input-lg w-full h-24" value={newAns} onChange={(e) => setNewAns(e.target.value)} />
                    </label>
                  </form>
                  <div className="modal-action">
                    <label htmlFor="my-modal-2" className="btn btn-primary" onClick={updateAnswer}>Update</label>
                    <label htmlFor="my-modal-2" className="btn">Close</label>
                  </div>
                </div>
              </div>
              <button onClick={DeleteAnswer} className='bg-transparent m-1 hover:bg-blue-900 text-white font-semibold hover:text-white py-1 px-2 border  hover:border-transparent rounded'><AiTwotoneDelete /></button>
            </>) : null
          }
        </div>
      </div>
    </>
  );
}

export default AnswerCard;
