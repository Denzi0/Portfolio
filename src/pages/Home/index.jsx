import Navigation from "../../components/Navigation";
import About from "./Sections/About";
import Banner from "./Sections/Banner";
import Certificates from "./Sections/Certificates";
import Contact from "./Sections/Contact";
import FeaturedProjects from "./Sections/FeaturedProjects";
import Footer from "./Sections/Footer";
import Projects from "./Sections/Projects";
function index() {
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Certificates />
      <FeaturedProjects />
      {/* <Projects /> */}

      <Contact />
      <Footer />
    </>
  );
}

export default index;
