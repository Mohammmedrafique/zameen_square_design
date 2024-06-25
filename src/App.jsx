import ApartmentCarousel from "./components/ApartmentCarousel";
import Navbar from "./components/Navbar";
import PropertyListingInterface from "./components/PropertyListingInterface";

const App = () => {
  return (
    <>
      <Navbar />
      <PropertyListingInterface />
      <ApartmentCarousel />
    </>
  );
};

export default App;
