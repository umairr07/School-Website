import AboutUs from "../AboutUs/AboutUs";
import AllCourses from "../AllCourses/AllCourses";
import BlogHighlights from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import HeroSection from "../Hero/HeroSection";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import Navbar from "../Navbar/Navbar";
import WhyIqra from "../Special/WhyIqra";
import Testimonials from "../Testimonals/Testimonals";

const AppComponents = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhyIqra />
      <KeyFeatures />
      <Explore />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default AppComponents;
