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
    image:
      "https://i.postimg.cc/43bWGHqr/big-american-house-generative-ai-170984-9624.avif",
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
    image:
      "https://i.postimg.cc/mkD4Cs7g/ai-generated-beautiful-home-exterior-in-evening-with-glowing-interior-lights-and-landscaping-photo.jpg",
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
    image: "https://i.postimg.cc/jq9mZPbX/dream-home-2216148.webp",
    price: "1.75 CR",
    title: "3BHK Apartment for Sale in DSR ",
    location: "WMJH+59C, Bellandur, Bengaluru, Karnataka 560103",
    beds: 3,
    baths: 3,
    furnished: "furnished",
    postedOn: "23 Aug 2023",
  },
  {
    id: 5,
    image:
      "https://i.postimg.cc/tCGQ9WMg/exterior-luxury-home-with-double-garage-brick-siding-trim-generative-ai-28914-19018.avif",
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
    title: "3BHK Apartment for Rent in Indiranagar ",
    location: "Indiranagar, Bengaluru, Karnataka - 560038",
    beds: 3,
    baths: 3,
    furnished: "Furnished",
    postedOn: "12 Aug 2023",
  },
  {
    id: 7,
    image: "https://i.postimg.cc/BQphRFWk/istockphoto-1387920805-170667a.webp",
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
    image: "https://i.postimg.cc/jq9mZPbX/dream-home-2216148.webp",
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
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    setApartments(fakeApiData);
  }, []);

  const filterApartments = (filter) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setApartments(fakeApiData);
    } else {
      const filteredApartments = fakeApiData.filter(
        (apartment) => apartment.beds === parseInt(filter)
      );
      setApartments(filteredApartments);
    }
    setCurrentIndex(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % apartments.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + apartments.length) % apartments.length
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 pt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="lg:text-2xl font-bold text-gray-800 sm:text-md">
          Popular Apartments in Bengaluru
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => filterApartments("All")}
            className={`px-3 py-1 rounded ${
              selectedFilter === "All"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => filterApartments("2")}
            className={`px-3 py-1 rounded ${
              selectedFilter === "2"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            2 BHK
          </button>
          <button
            onClick={() => filterApartments("3")}
            className={`px-3 py-1 rounded ${
              selectedFilter === "3"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            3 BHK
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-nowrap overflow-hidden m-1 pb-1">
          {apartments.slice(currentIndex, currentIndex + 4).map((apartment) => (
            <div key={apartment.id} className="flex-shrink-0 mr-4">
              <ApartmentCard apartment={apartment} />
            </div>
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
