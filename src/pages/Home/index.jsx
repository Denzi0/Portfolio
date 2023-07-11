import Navigation from "../../components/Navigation";
import About from "./Sections/About";
import Banner from "./Sections/Banner";
import Certificates from "./Sections/Certificates";
import Contact from "./Sections/Contact";
import FeaturedProjects from "./Sections/FeaturedProjects";
import Footer from "./Sections/Footer";
function index() {
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Certificates />
      <FeaturedProjects />

      <Contact />
      <Footer />
    </>
  );
}

export default index;
