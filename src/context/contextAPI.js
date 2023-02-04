import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ContextAPI = createContext();
export function PollsHubContextProvider({ children }) {
  const navigate = useNavigate();
  // signup function 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleUserSignUp = async (e) => {
    e.preventDefault();
    // console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.warn(result);
    if (result.success) {
      // console.log(result);
      localStorage.setItem("inquera-user", JSON.stringify(result.resp));
      navigate("/");
      toast.success("SignUp successfully");
    } else {
      toast.error("Email already registered");
    }
  };
  //    login function 
  const handleLogin = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.warn(result);
    if (result.name) {

      localStorage.setItem("inquera-user", JSON.stringify(result));
      navigate("/");
      toast.success("LoggedIn In successfully");
      setEmail("");
      setPassword("");
    } else {
      // alert("please enter correct details");
      toast.error("Please Enter correct Details");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <ContextAPI.Provider
      value={{
        HandleUserSignUp,
        handleLogin,
        email,
        password,
        setEmail,
        setName,
        setPassword,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
}
export default ContextAPI;
