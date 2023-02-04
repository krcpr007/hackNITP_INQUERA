import React, {useEffect,useContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import ContextAPI from "../context/contextAPI";
import logo from "./logo.png";
const Signup = () => {
  const {HandleUserSignUp ,setName , setEmail,setPassword} = useContext(ContextAPI); 
  const navigate =useNavigate(); 
    useEffect(() => {
        const auth = localStorage.getItem('inquera-user');
        if(auth){
          navigate('/')
        }
    },)
  return (
    <div className="hero min-h-screen bg-[#0e1e2c]">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold">
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white flex">
            <h3 className="px-2 font-extrabold text-6xl font-serif flex text-white">
              In
              <img src={logo} className="h-16" alt="logo" />
              uera
            </h3>
          </span>
          </h1>
          <p className="mb-5 font-medium text-yellow-400">
          We believe in unity together we can get the answer to any question so lets begin one step  forward to get answers with InQuera. <br />
          Inquera is Based on MERN Stack.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body bg-slate-900">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-warning input-bordered bg-[#0e1e2c] text-white"
                  autoComplete="on"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="on"
                  name="email"
                  className="input input-warning input-bordered bg-[#0e1e2c] text-white"
                  onChange={e=> setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="on"
                  className="input input-warning input-bordered bg-[#0e1e2c] text-white"
                  onChange={e=>setPassword(e.target.value)}
                  required
                  
                />
                <label className="label">
                  <p className="label-text-alt text-white">
                    Already have account? <Link to="/login">Login</Link>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control mt-5">
                <button type="submit" className="btn glass bg-[#04293A]" onClick={HandleUserSignUp}>
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;