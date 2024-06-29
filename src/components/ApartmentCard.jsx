import PropTypes from "prop-types";
import {
  Bath,
  IndianRupee,
  MapPin,
  BedDouble,
  Armchair,
  Heart,
} from "lucide-react";

const ApartmentCard = ({ apartment }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden relative w-80">
    <div className="relative">
      <img
        src={apartment.image}
        alt={apartment.title}
        className="w-full h-48 object-cover p-1 rounded-2xl"
      />
      <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-500 transition-colors translate-y-5">
        <Heart size={18} className="text-gray-600  hover:text-white" />
      </button>
    </div>
    <div className="p-4">
      <h3 className="text-xl flex font-semibold text-blue-600">
        <IndianRupee size={16} className="mr-1 mt-1" />
        <span className="text-sm">{apartment.price}</span>
      </h3>
      <h4 className="text-md font-medium mt-1 truncate" title={apartment.title}>
        {apartment.title}
      </h4>
      <p className="text-sm flex text-gray-500 mt-1">
        <MapPin size={16} className="mr-1 mt-1 flex-shrink-0" />
        <span className="text-sm truncate" title={apartment.location}>
          {apartment.location}
        </span>
      </p>
      <div className="flex justify-between mt-3">
        <div className="flex items-center">
          <BedDouble size={16} className="mr-1" color="#609CE6" />
          <span className="text-sm">{apartment.beds} Beds</span>
        </div>
        <div className="flex items-center">
          <Bath size={16} className="mr-1" color="#609CE6" />
          <span className="text-sm">{apartment.baths} Baths</span>
        </div>
        <div className="flex items-center">
          <Armchair size={16} className="mr-1" color="#609CE6" />
          <span className="text-sm truncate">{apartment.furnished}</span>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div className="text-sm text-black mt-3">
          <p>Posted On:</p>
          <p>{apartment.postedOn}</p>
        </div>
        <div className="mt-4">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
);

ApartmentCard.propTypes = {
  apartment: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    beds: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    furnished: PropTypes.string,
    postedOn: PropTypes.string.isRequired,
  }).isRequired,
};

export default ApartmentCard;
