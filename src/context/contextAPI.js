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
    let result = await fetch("https://inquera.onrender.com/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.success) {
      localStorage.setItem("inquera-user", JSON.stringify(result));
      navigate("/");
      toast.success("SignUp successfully");
      setName("");
      setEmail("");
      setPassword('');
    } else {
      toast.error("Email already registered");
      setEmail("");
      setPassword('');
    }
  };
  //    login function 
  const handleLogin = async (e) => {
    e.preventDefault();
    let result = await fetch("https://inquera.onrender.com/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.name) {
      localStorage.setItem("inquera-user", JSON.stringify(result));
      navigate("/");
      toast.success("LoggedIn In successfully");
      setEmail("");
      setPassword("");
    } else {
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
