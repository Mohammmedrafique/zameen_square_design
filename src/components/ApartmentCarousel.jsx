import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ApartmentCard from "./ApartmentCard";

// Fake API data
const fakeApiData = [
  {
    id: 1,
    image: "https://i.postimg.cc/xT8Kdy2X/appreciation-and-inflation.jpg",
    price: "90.00 Lac",
    title: "3BHK Apartment for Sale in JP Nagar",
    location: "J. P. Nagar, Bengaluru Karnataka - 560078",
    beds: 3,
    baths: 2,
    furnished: "furnished",
    postedOn: "31 Aug 2023",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/xT8Kdy2X/appreciation-and-inflation.jpg",
    price: "45,000",
    title: "2BHK Apartment for Rent in HSR Layout",
    location: "HSR Layout, Bengaluru, Karnataka - 560102",
    beds: 2,
    baths: 2,
    furnished: "Furnished",
    postedOn: "17 Aug 2023",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/xT8Kdy2X/appreciation-and-inflation.jpg",
    price: "90.00 Lac",
    title: "2BHK Apartment for Sale in Bellandur",
    location: "WMJH+59C, Bellandur, Bengaluru, Karnataka 560103",
    beds: 2,
    baths: 2,
    furnished: "furnished",
    postedOn: "21 Jul 2023",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/xT8Kdy2X/appreciation-and-inflation.jpg",
    price: "1.75 CR",
    title: "3BHK Apartment for Sale in DSR Rainbow Heights",
    location: "DSR Rainbow Heights, 2nd Cross Rd, Bengaluru",
    beds: 3,
    baths: 3,
    furnished: "furnished",
    postedOn: "23 Aug 2023",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/xT8Kdy2X/appreciation-and-inflation.jpg",
    price: "50.00 Lac",
    title: "1BHK Apartment for Sale in Whitefield",
    location: "Whitefield, Bengaluru Karnataka - 560066",
    beds: 1,
    baths: 1,
    furnished: "furnished",
    postedOn: "15 Aug 2023",
  },
  {
    id: 6,
    image: "https://i.postimg.cc/xT8Kdy2X/appreciation-and-inflation.jpg",
    price: "75,000",
    title: "3BHK Apartment for Rent in Indiranagar",
    location: "Indiranagar, Bengaluru, Karnataka - 560038",
    beds: 3,
    baths: 3,
    furnished: "Furnished",
    postedOn: "12 Aug 2023",
  },
  {
    id: 7,
    image: "https://i.postimg.cc/xT8Kdy2X/appreciation-and-inflation.jpg",
    price: "75,000",
    title: "3BHK Apartment for Rent in Indiranagar",
    location: "Indiranagar, Bengaluru, Karnataka - 560038",
    beds: 3,
    baths: 3,
    furnished: "Furnished",
    postedOn: "12 Aug 2023",
  },
  {
    id: 8,
    image: "https://i.postimg.cc/xT8Kdy2X/appreciation-and-inflation.jpg",
    price: "75,000",
    title: "3BHK Apartment for Rent in Indiranagar",
    location: "Indiranagar, Bengaluru, Karnataka - 560038",
    beds: 3,
    baths: 3,
    furnished: "Furnished",
    postedOn: "12 Aug 2023",
  },
];

const ApartmentCarousel = () => {
  const [apartments, setApartments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setApartments(fakeApiData);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % apartments.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 4 + apartments.length) % apartments.length
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Popular Apartments in Bengaluru
        </h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-green-500 text-white rounded">
            All
          </button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">
            2 BHK
          </button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">
            3 BHK
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto">
          {apartments.slice(currentIndex, currentIndex + 4).map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ApartmentCarousel;
