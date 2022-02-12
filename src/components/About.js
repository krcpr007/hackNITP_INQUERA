import React from "react";

function About() {
  return (
  <> 
    <div>
        <div className="p-5 md:px-20">
        <h1 className=" text-5xl text-center font-medium text-yellow-500">Welcome to InQuera </h1>
        <div>
            <h1 className="text-2xl font-bold">About</h1>
            <hr />
            <p className="p-5 text-justify font-semibold">Inquera is an online asking platform where anyone comes and asks their own queries and get answers from other users of inquera also user can answer the question or query of other users. </p>
        </div>
        <div>
            <h1 className="text-2xl font-bold">Vision</h1>
            <hr />
            <p className="p-5 text-justify font-medium">Inquera mission is to share and grow the world’s knowledge. As we all knowledge cant be written down, but much of that which can be still isn't. It remains in people’s heads or is only accessible if you know the right people. We want to connect the people who have the knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.
            <br />
            Great writers help you understand why the world works the way it does, why people behave the way they do, and what we can all do to make the world better. Millions of people search the web for answer for this soloution we came InQuera
            </p>
        </div>
        <div>
            <h1 className="text-2xl font-bold">Creaters</h1>
            <hr />
            <h1 className="text-center">Team Wizard</h1>
            <ul>
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
            </ul>
        </div>
        </div>
      </div>
      </>
  );
}

export default About;
