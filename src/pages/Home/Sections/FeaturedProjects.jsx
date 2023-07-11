import "./FeaturedProjects.css";
import myimage from "../../../assets/images/project.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export default function FeaturedProjects() {
  return (
    <section className="featured-projects-container" id="project-id">
      <div className="container">
        <div className="featured-projects-details">
          <h2>
            The <br />
            Projects section.
          </h2>
          <p>
            Here, you'll find a collection of my notable projects that
            demonstrate my skills and expertise in various areas. Each project
            represents a unique challenge and showcases my ability to solve
            problems and deliver high-quality solutions
          </p>
          <div className="all-featured-projects">{/*  */}</div>
          <a href="#" className="about-link" target="_blank">
            <span>More</span> <BsFillArrowRightCircleFill />
          </a>
        </div>
        <div className="featured-project-gallery">
          <div class="projects-card">
            <img src={myimage} />
          </div>
          <div class="projects-card">
            <img src={myimage} />
          </div>
          <div class="projects-card">
            <img src={myimage} />
          </div>
          <div class="projects-card">
            <img src={myimage} />
          </div>
        </div>
      </div>
    </section>
  );
}
