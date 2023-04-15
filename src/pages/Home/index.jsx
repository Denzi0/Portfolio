import Navigation from "../../components/Navigation";
import About from "./Sections/About";
import Banner from "./Sections/Banner";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Projects from "./Sections/Projects";
function index() {
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default index;
