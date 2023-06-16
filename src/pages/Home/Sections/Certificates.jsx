import "./Certificates.css";
import Button from "../../../components/Button";

import Card from "../../../components/Card";

function Certificate() {
  return (
    <>
      <div className="certificates-section flex-container" id="certificates-id">
        <div className="container certificates-container flex-container">
          <div className="certificates-details">
            <h2>
              Web <span className="transparent-text">Dev</span> and <br />
              Design <span className="transparent-text">Expertise</span>
            </h2>
            <p className="certificates-more-details">
              I'm an experienced and dedicated web deverloper/designer with a
              passion for creating beautiful, responsive websites. With over 1/2
              years of experience in the industry, I specialize in creating
              user-friendly, visually appealing websites from start to finish.
            </p>
            <Button buttonType={"btn-ghost"} url="contact-id">
              Explore More Projects
            </Button>
          </div>

          <div className="certificates-details2">
            <Card subTitle="Wordpress" title="JKC Real Estates" link="#" />
            <Card subTitle="React and Laravel" title="De Oro Mediko" link="#" />
            <Card subTitle="React and Laravel" title="De Oro Mediko" link="#" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificate;
