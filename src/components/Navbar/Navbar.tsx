
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  return (
    <header className="w-full font-poppins">
      {/* Top Black Bar */}
      <div className="bg-black text-white h-12 flex items-center px-4">
        <div className="max-w-[1170px] w-full mx-auto flex justify-between items-center">
          <p className="text-sm text-center flex-grow">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <div className="flex items-center gap-2 text-sm cursor-pointer">
            <span>English</span>
            <img src="/assets/DropDown.svg" alt="dropdown" className="w-4" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[1170px] mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src="/assets/Logo.svg" alt="Logo" className="w-[118px] h-6" />
          </div>

          {/* Links */}
          <nav className="hidden md:flex gap-12 text-base">
            <Link to="/" className="relative hover:after:w-full after:transition-all after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-black">
              Home
            </Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden sm:flex items-center bg-gray-100 px-4 py-2 rounded-md">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-xs w-40"
              />
              <img src="/assets/search.svg" alt="search" className="w-5" />
            </div>

            <img src="/assets/Wishlist.svg" alt="heart" className="w-8 cursor-pointer" />
            <img src="/assets/Cart.svg" alt="cart" className="w-8 cursor-pointer" />

            {/* Hamburger menu */}
            <button
              className="text-2xl md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              &#9776;
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } z-50 p-6 flex flex-col`}
      >
        <button
          className="text-2xl self-end mb-4"
          onClick={() => setIsSidebarOpen(false)}
        >
          &times;
        </button>
        <Link to="/" className="mb-4" onClick={() => setIsSidebarOpen(false)}>
          Home
        </Link>
        <Link to="/contact" className="mb-4" onClick={() => setIsSidebarOpen(false)}>
          Contact
        </Link>
        <Link to="/about" className="mb-4" onClick={() => setIsSidebarOpen(false)}>
          About
        </Link>
        <Link to="/signup" className="mb-4" onClick={() => setIsSidebarOpen(false)}>
          Sign Up
        </Link>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </header>
  )
}

export default Navbar
