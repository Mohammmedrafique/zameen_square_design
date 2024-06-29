import { Search, MapPin } from "lucide-react";

const PropertyListingInterface = () => {
  return (
    <div className="relative flex flex-col justify-center items-center  bg-cover  bg-no-repeat h-[20vh] sm:h-[50vh]  bg-[url('https://zameensquare.com/_next/static/media/homeHeaderImage.25bb3789.gif')] mb-16">
      <div className="bg-white p-4 rounded-lg shadow-md absolute w-80 lg:w-1/3  translate-y-24 lg:bottom-1 transform lg:translate-y-1/2">
        <div className="flex ">
          <button className=" text-blue-700  py-2 underline font-semibold rounded hover:underline hover:text-blue-600 hover:font-bold">
            Buy
          </button>
          <button className=" text-gray-700 px-3 py-2 rounded font-semibold hover:underline hover:text-blue-600 hover:font-bold">
            Rent
          </button>
          <button className=" text-gray-700 px-2 py-2 rounded font-semibold hover:underline hover:text-blue-600 hover:font-bold">
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
          <button className="bg-blue-600 text-white px-1 rounded flex items-center">
            <Search size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingInterface;
