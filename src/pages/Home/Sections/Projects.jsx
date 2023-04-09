import "./Projects.css";

function Projects() {
  return (
    <div className="projects-section" id="projects-id">
      <div className="container projects-container">
        <div className="projects-details">
          {/* <p className="projects-details-sub">My Web Development Journey</p> */}
          <h2>
            Projects & <br />
            <span className="transparent-text">Case Studies</span>
          </h2>
        </div>
      </div>
      <div className="projects-tablist-container">
        <ul className="projects-tablists">
          <li className="projects-web-design">
            <a href="#">Web Design</a>
          </li>
          <li className="projects-web-sites">
            <a href="#">Web Sites</a>
          </li>
          <li className="projects-mobile-design">
            <a href="#">Mobile App Design</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
