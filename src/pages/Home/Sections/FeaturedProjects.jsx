import "./FeaturedProjects.css";
import myimage from "../../../assets/images/placeholder.png";

export default function FeaturedProjects() {
  return (
    <section className="featured-projects-container">
      <div className="container">
        <div className="featured-projects-details">
          <h2>
            Featured <span className="transparent-text">Projects</span>
          </h2>
        </div>
      </div>
      <div className="featured-project-gallery container">
        <img src={myimage} className="gallery-1" />
        <img src={myimage} className="gallery-2" />
        <img src={myimage} className="gallery-3" />
      </div>
    </section>
  );
}
