import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Bengaluru");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <svg
                className="h-8 w-8 text-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-2 text-xl font-bold">Zameen Square</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                {selectedCity}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <a
              href="#"
              className="text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Buy
            </a>
            <a
              href="#"
              className="text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Rent
            </a>
            <a
              href="#"
              className="text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sell
            </a>
            <a
              href="#"
              className="text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              PG
            </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
              Post Property
            </button>
            <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md text-sm font-medium">
              Login
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <button className="text-gray-600 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
              {selectedCity}
              <ChevronDown className="ml-1 h-4 w-4 inline" />
            </button>
            <a
              href="#"
              className="text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Buy
            </a>
            <a
              href="#"
              className="text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Rent
            </a>
            <a
              href="#"
              className="text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Sell
            </a>
            <a
              href="#"
              className="text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              PG
            </a>
            <button className="w-full text-left bg-blue-500 text-white px-3 py-2 rounded-md text-base font-medium">
              Post Property
            </button>
            <button className="w-full text-left text-blue-500 border border-blue-500 px-3 py-2 rounded-md text-base font-medium">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
