import Navigation from "../../components/Navigation";
import About from "./Sections/About";
import Banner from "./Sections/Banner";
import Projects from "./Sections/Projects";
function index() {
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Projects />
    </>
  );
}

export default index;
