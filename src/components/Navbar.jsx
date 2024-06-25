import { Link } from "react-router-dom";
import { ChevronDown, MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile view */}
        <div className="flex justify-between items-center h-16 sm:hidden">
          <div className="flex-shrink-0 flex items-center">
            <svg
              className="h-8 w-8 text-blue-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <div className="flex items-center">
            <button className="text-gray-600 bg-gray-50 hover:text-blue-500 px-2 py-1 rounded-md text-sm font-medium flex items-center">
              <MapPin color="#50BF97" size={16} className="mr-1" />
              Bengaluru
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium">
              Post Property
            </button>
            <button className="text-blue-500 border border-blue-500 px-3 py-1 rounded-md text-sm font-medium">
              Login
            </button>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden sm:flex sm:justify-between sm:h-16">
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
            <div className="ml-6 flex space-x-8">
              <button className="text-gray-600 bg-gray-50 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                Bengaluru
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/buy"
              className="text-blue-500 px-3 py-2 rounded-md text-md font-medium"
            >
              Buy
            </Link>
            <Link
              to="/rent"
              className="text-blue-500 px-3 py-2 rounded-md text-md font-medium"
            >
              Rent
            </Link>
            <Link
              to="/sell"
              className="text-blue-500 px-3 py-2 rounded-md text-md font-medium"
            >
              Sell
            </Link>
            <Link
              to="/pg"
              className="text-blue-500 px-3 py-2 rounded-md text-md font-medium"
            >
              PG
            </Link>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
              Post Property
            </button>
            <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
