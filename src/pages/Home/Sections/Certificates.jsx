import "./Certificates.css";
import Button from "../../../components/Button";

import Card from "../../../components/Card";

function Certificate() {
  return (
    <>
      <div className="certificates-section flex-container" id="certificates-id">
        <div className="container certificates-container flex-container">
          <div className="certificates-details">
            <h2>Certificates section</h2>
            <p className="certificates-more-details">
              Here, I proudly showcase my achievements and certifications from
              Coursera, where I have honed my skills and expanded my knowledge
              in various domains. These certificates validate my commitment to
              continuous learning and my dedication to staying at the forefront
              of industry trends
            </p>
            <Button buttonType={"btn-ghost btn-certificates"} url="contact-id">
              Explore More Projects
            </Button>
          </div>

          <div className="certificates-details2">
            <Card
              subTitle="Python"
              title="Crash Course on Python"
              link="https://coursera.org/share/9ba7236b7327d919b241952f7a425a20"
              linkName="My Certificate"
            />
            <Card
              subTitle="Google Ui/Ux"
              title="Create High-Fidelity Designs and Prototypes in Figma"
              link="https://coursera.org/share/ecc07f545627041089dd91e9805610db"
              linkName="My Certificate"
            />
            <Card
              subTitle="University of Michigan"
              title="Building Database Application in PHP"
              link="https://coursera.org/share/904c7ea719a612fa826ba36f5cf73501"
              linkName="My Certificate"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificate;
