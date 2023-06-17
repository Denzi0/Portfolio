import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Card from "../../../components/Card";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  return (
    <section className="featured-projects-container" id="project-id">
      <div className="container">
        <div className="featured-projects-details">
          <h2>The Projects section.</h2>
          <p>
            Here, you'll find a collection of my notable projects that
            demonstrate my skills and expertise in various areas. Each project
            represents a unique challenge and showcases my ability to solve
            problems and deliver high-quality solutions
          </p>
          <div className="all-featured-projects">
            <div className="flex-container">
              <Card
                subTitle="Wordpress"
                title="JKC Real Estates"
                link="https://www.jkcrealestate.com.au"
                linkName="Visit Site"
              />
              <Card
                subTitle="Wordpress"
                title="1891 Tattoo"
                link="http://www.1891tattoo.com"
                linkName="Visit Site"
              />
              <Card
                subTitle="Wordpress"
                title="BTA 4wd Ballina"
                link="http://www.bta4wd.com"
                linkName="Visit Site"
              />
              <Card
                subTitle="Laravel"
                title="De Oro Mediko"
                link="https://deoromediko.com"
                linkName="Visit Site"
              />
            </div>
            <div className="flex-container">
              <Card
                subTitle="Wordpress"
                title="Irish Club Hotel"
                link="http://www.irishclubhotel.com.au"
                linkName="Visit Site"
              />
              <Card
                subTitle="Wordpress"
                title="Albany Event Hire"
                link="http://www.albanyeventhire.com.au/"
                linkName="Visit Site"
              />
              <Card
                subTitle="Wordpress"
                title="STIHL Fulham"
                link="http://www.stihlshopfulham.com.au/"
                linkName="Visit Site"
              />
              <Card subTitle="Wordpress" title="JKC Real Estates" link="#" />
            </div>
          </div>
          <a href="#" className="about-link" target="_blank">
            Many More
          </a>
        </div>
      </div>
      <div className="featured-project-gallery container"></div>
    </section>
  );
}
