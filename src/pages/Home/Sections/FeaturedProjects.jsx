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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            nesciunt veritatis dicta repudiandae harum sapiente, repellat
            necessitatibus quasi quas reiciendis, vel pariatur libero laborum
            eaque quisquam nemo aut possimus in optio beatae exercitationem
            dignissimos quae? Sit molestiae minus laudantium ab earum, corrupti
            enim quibusdam officia dignissimos omnis nisi animi numquam!
          </p>
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
