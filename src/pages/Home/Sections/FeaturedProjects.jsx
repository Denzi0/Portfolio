import Card from "../../../components/Card";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  return (
    <section className="featured-projects-container">
      <div className="container">
        <div className="featured-projects-details">
          <h2>List of all Projects</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            sed aliquid esse exercitationem nulla ipsum eveniet rem, culpa
            voluptatem. Fugit!
          </p>
          <div className="all-featured-projects">
            <Card subTitle="Wordpress" title="JKC Real Estates" link="#" />
            <Card subTitle="Wordpress" title="JKC Real Estates" link="#" />
            <Card subTitle="Wordpress" title="JKC Real Estates" link="#" />
          </div>
        </div>
      </div>
      <div className="featured-project-gallery container"></div>
    </section>
  );
}
