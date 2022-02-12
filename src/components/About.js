import React from "react";
function About() {
  return (
  <> 
    <div className="bg-[#0e1e2c]">
        <div className="p-5 md:px-20">
        <h1 className=" text-5xl text-center font-medium font-serif text-yellow-500 underline">InQuera </h1>
        <div>
            <h1 className="text-2xl font-bold text-rose-500">About</h1>
            <hr />
            <p className="md:p-5 text-justify font-semibold text-gray-500">Inquera is an online asking platform where anyone comes and asks their own queries and get answers from other users of inquera also user can answer the question or query of other users. </p>
        </div>
        <div>
            <h1 className="text-2xl font-bold text-rose-500">Vision</h1>
            <hr />
            <p className="md:p-5 text-justify font-medium text-gray-500">Inquera mission is to share and grow the world’s knowledge. As we all knowledge cant be written down, but much of that which can be still isn't. It remains in people’s heads or is only accessible if you know the right people. We want to connect the people who have the knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.
            <br />
            Great writers help you understand why the world works the way it does, why people behave the way they do, and what we can all do to make the world better. Millions of people search the web for answer for this soloution we came InQuera
            </p>
        </div>
        <div>
            <h1 className="text-2xl font-bold text-rose-500">Creaters</h1>
            <hr />
            <h1 className="text-center text-3xl text-yellow-400 font-serif">Team Wizard</h1>
            {/* <ul className="justify-center">
              <li>
                Ayushi Gupta
              </li>
              <li>
                Payal bharti
              </li>
              <li>
                Yadav Rajneesh
              </li>
              <li>
                Rajan kumar
              </li>
            </ul> */}
            <div className="mt-10 md:flex">
              <div className="card md:w-1/6  rounded-lg bg-slate-900 md:mx-12">
                   <div>
                     <img src="https://avatars.githubusercontent.com/u/80947662?v=4" className="" alt="" />
                   </div>
                   <div className="card-body">
                     <h1 className="card-title">Rajan Kumar</h1>
                     <p>lorem ipsum </p>
                   </div>
              </div>
              <div className="card md:w-1/6  rounded-lg bg-slate-900 md:mx-12">
                   <div>
                     <img src="https://avatars.githubusercontent.com/u/80947662?v=4" className="" alt="" />
                   </div>
                   <div className="card-body">
                     <h1 className="card-title">Rajan Kumar</h1>
                     <p>lorem ipsum </p>
                   </div>
              </div>
              <div className="card md:w-1/6  rounded-lg bg-slate-900 md:mx-12">
                   <div>
                     <img src="https://avatars.githubusercontent.com/u/80947662?v=4" className="" alt="" />
                   </div>
                   <div className="card-body">
                     <h1 className="card-title">Rajan Kumar</h1>
                     <p>lorem ipsum </p>
                   </div>
              </div>
              <div className="card md:w-1/6  rounded-lg bg-slate-900 md:mx-12">
                   <div>
                     <img src="https://avatars.githubusercontent.com/u/80947662?v=4" className="" alt="" />
                   </div>
                   <div className="card-body">
                     <h1 className="card-title">Rajan Kumar</h1>
                     <p>lorem ipsum </p>
                   </div>
              </div>
             
              
              
            </div>
        </div>
        </div>
      </div>
      </>
  );
}

export default About;
