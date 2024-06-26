// import { Search, MapPin } from "lucide-react";

// const PropertyListingInterface = () => {
//   return (
//     <div className="bg-gray-100 p-4 font-sans flex flex-col justify-center items-center">
//       <div className="">
//         <div className="text-center mb-4">
//           <h1 className="text-2xl font-bold">
//             SEARCH YOUR PROPERTY ON{" "}
//             <span className="text-blue-600">ZAMEEN</span>
//             <span className="text-green-600">SQUARE</span>
//           </h1>
//           <h2 className="text-2xl font-bold">TODAY!</h2>
//         </div>
//       </div>

//       <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
//         <div className="flex space-x-2 mb-4">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded">
//             Buy
//           </button>
//           <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
//             Rent
//           </button>
//           <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
//             PGs
//           </button>
//         </div>

//         <div className="flex space-x-2">
//           <div className="flex-1 flex items-center border rounded px-3 py-2">
//             <MapPin size={20} className="text-green-600 mr-2" />
//             <input
//               type="text"
//               placeholder="Bengaluru"
//               className="w-full outline-none"
//             />
//           </div>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded flex items-center">
//             <Search size={20} className="mr-2" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyListingInterface;
// import { Search, MapPin } from "lucide-react";

// const PropertyListingInterface = () => {
//   return (
//     <div className="bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center mb-10  bg-[url('https://zameensquare.com/_next/static/media/homeHeaderImage.25bb3789.gif')] h-[50vh] sm:h-[70vh]">
//       <div
//         className="bg-white p-4 rounded-lg shadow-md w-full max-w-md"
//         style={{
//           position: "absolute",
//           bottom: "50%",
//           transform: "translateY(90%)",
//         }}
//       >
//         <div className="flex space-x-2 mb-4">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded">
//             Buy
//           </button>
//           <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
//             Rent
//           </button>
//           <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
//             PGs
//           </button>
//         </div>

//         <div className="flex space-x-2">
//           <div className="flex-1 flex items-center border rounded px-3 py-2">
//             <MapPin size={20} className="text-green-600 mr-2" />
//             <input
//               type="text"
//               placeholder="Bengaluru"
//               className="w-full outline-none"
//             />
//           </div>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded flex items-center">
//             <Search size={20} className="mr-2" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyListingInterface;
import { Search, MapPin } from "lucide-react";

const PropertyListingInterface = () => {
  return (
    <div className="relative flex flex-col justify-center items-center  bg-cover bg-center bg-no-repeat h-[20vh] sm:h-[50vh]  bg-[url('https://zameensquare.com/_next/static/media/homeHeaderImage.25bb3789.gif')] mb-16">
      <div className="bg-white p-4 rounded-lg shadow-md absolute w-80 lg:w-1/3  translate-y-16 lg:bottom-1 transform lg:translate-y-1/2 ">
        <div className="flex mb-4">
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
