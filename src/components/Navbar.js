import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "./logo.png";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = localStorage.getItem("inquera-user");
  const handleLogout = () => {
    localStorage.removeItem('inquera-user');
    toast.success("Log out successfully")
    navigate('/login')
  }
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }
  const menu = document.getElementById("#btn");
  const handleMobileView = () => {
    menu.classList.toggle("hidden")
  }
  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 shadow-xl bg-slate-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex">
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white flex">
            <h3 className="px-2 font-extrabold text-2xl md:text-4xl font-serif flex">
              In
              <img src={logo} className="h-9" alt="logo" />
              uera
            </h3>
          </span>
        </Link>
        <div className="flex md:order-2">
          {auth ? (<button type="button" className="bg-yellow-400 py-2 px-5 font-medium text-slate-900 rounded-lg text-sm hover:bg-yellow-500" onClick={handleLogout}>Log out</button>) : (
            <>
              <Link to='/login' className="mx-1">
                <button className="bg-yellow-400 py-2 px-5 font-medium text-slate-900 rounded-lg hover:bg-yellow-500">Login</button>
              </Link>
            </>
          )}
          <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false" onClick={handleMobileView}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/" className={`${pathMatchRoute('/') ? 'text-yellow-300 font-medium' : null} block py-2 pr-4 pl-3  rounded md:bg-transparent  md:p-0 `} aria-current="page"
              >
                Home
              </Link>
            </li>
            {auth ? <>
              <li>
                <Link to="/addQuery" className={` ${pathMatchRoute('/addQuery') ? 'dark:text-yellow-300 font-medium ' : null} block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`} aria-current="page"
                >
                  Ask Query
                </Link>
              </li>
              <li>
                <Link to="/yoursQuery" className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${pathMatchRoute('/yoursQuery') ? 'dark:text-yellow-300 font-medium' : null} `}
                >
                  Yours Query
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${pathMatchRoute('/contact') ? 'dark:text-yellow-400 font-medium' : null}`}
                >
                  Contact us
                </Link>
              </li>
            </> : null}
            <li>
              <Link
                to="/about" className={`${pathMatchRoute('/about') ? 'dark:text-yellow-300 font-medium' : null}  "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
