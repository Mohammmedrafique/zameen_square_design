import PropTypes from "prop-types";
import { Bath, IndianRupee, MapPin, BedDouble, Armchair } from "lucide-react";

const ApartmentCard = ({ apartment }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      src={apartment.image}
      alt={apartment.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl flex font-semibold text-blue-600">
        <IndianRupee size={16} className="mr-1 mt-1" />
        <span className="text-sm">{apartment.price}</span>
      </h3>
      <h4 className="text-lg font-medium mt-1">{apartment.title}</h4>
      <p className="text-sm flex text-gray-500 mt-1">
        <MapPin size={16} className="mr-1 mt-1" />
        <span className="text-sm">{apartment.location}</span>
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
          <span className="text-sm">{apartment.furnished}</span>
        </div>
      </div>
      {/* <p className="text-sm text-gray-500 mt-3">
        Posted On: {apartment.postedOn}
      </p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
        View Details
      </button> */}
      <div className="flex">
      <p className="text-sm text-black mt-3">
        Posted On: {apartment.postedOn}
      </p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
        View Details
      </button>
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
