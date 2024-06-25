import { Search, MapPin } from "lucide-react";

const PropertyListingInterface = () => {
  return (
    <div className="bg-gray-100 p-4 font-sans flex flex-col justify-center items-center">
      <div className="">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">
            SEARCH YOUR PROPERTY ON{" "}
            <span className="text-blue-600">ZAMEEN</span>
            <span className="text-green-600">SQUARE</span>
          </h1>
          <h2 className="text-2xl font-bold">TODAY!</h2>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <div className="flex space-x-2 mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Buy
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Rent
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            PGs
          </button>
        </div>

        <div className="flex space-x-2">
          <div className="flex-1 flex items-center border rounded px-3 py-2">
            <MapPin size={20} className="text-green-600 mr-2" />
            <input
              type="text"
              placeholder="Bengaluru"
              className="w-full outline-none"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded flex items-center">
            <Search size={20} className="mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingInterface;
