import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import IqraLogo from "../../images/IqraLogo.jpg";
import { HiX } from "react-icons/hi";

const lists = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "Curriculum",
    path: "/curriculum",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 p-2 left-0 w-full bg-white text-blue-600 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={IqraLogo} alt="Logo" className="w-16" />
            <span className="text-xl font-bold">EduPlatform</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {lists.map((item, idx) => {
              return location.pathname === item.path ? (
                <Link
                  to={item.path}
                  className="cursor-pointer lg:text-[17px] md:text-[15px] text-green-400 transition-all duration-300 underline-offset-4 underline"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  to={item.path}
                  className="cursor-pointer lg:text-[17px] md:text-[15px] hover:text-green-400 transition-all duration-300 underline-offset-4 hover:underline"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-blue-600 focus:outline-none"
              onClick={() => setMenu(!menu)}
            >
              {!menu ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <HiX className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className="fixed top-0 right-0 h-screen w-56 bg-white shadow-xl flex flex-col justify-start items-start py-5 z-50">
          <button
            className="ml-auto mr-6 mt-1 text-blue-600 hover:text-red-500"
            onClick={() => setMenu(false)}
          >
            <HiX className="text-2xl" />
          </button>
          <div className="flex flex-col gap-3 ml-5 text-blue-600">
            {lists.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => setMenu(false)}
                  className="hover:underline"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
