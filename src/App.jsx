// App.jsx
// src/App.jsx

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"
import About from "./components/AboutSection"
import ServicesSlider from "./components/ServicesSlider";
import ReviewsSection from "../src/components/ReviewsSection"
import WhyChooseUs from "../src/components/WhyChooseUs"
import Footer from "../src/components/Footer"
import FindUs from "../src/components/FindUs"
import GallerySlider from "../src/components/GallerySlider"
function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
      <About />
      <ServicesSlider />
      <WhyChooseUs />
      <GallerySlider />
      <ReviewsSection />
      <FindUs />
      < Footer />
    </>
  );
}

export default App;
