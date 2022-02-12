import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { PollsHubContextProvider } from "./context/contextAPI";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import AddQuery from "./components/AddQuery";
import SubmitAns from "./components/SubmitAns";
import Error from "./components/404";
import PrivateComponent from "./components/PrivateComponent";
import YoursQuery from "./components/YoursQuery";
function App() {
  return (
    <>
      <BrowserRouter>
        <PollsHubContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route element={<PrivateComponent/>}>
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/addQuery" element={<AddQuery />} />
            <Route path="/yoursQuery" element={<YoursQuery />} />
            <Route path="/polls/:id" element={<SubmitAns />} />
            </Route>
            <Route path="/*" element={<Error />} />
          </Routes>
          <ToastContainer theme="dark" />
          <Footer />
        </PollsHubContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
