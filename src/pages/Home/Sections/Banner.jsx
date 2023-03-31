import "./Banner.css";
import google from "../../../assets/images/google-icon.png";
import um from "../../../assets/images/university-of-michigan-logo.png";
import Button from "../../../components/Button";
function Banner() {
  return (
    <>
      <div className="banner-container">
        <div className="container">
          <div className="banner-details">
            <p className="banner-details-intro">
              👋 Hi my name is Denzel and I am a
            </p>
            <h1 className="banner-details-webDeveloper">Web Developer</h1>
            <h1 className="banner-details-webDesigner">& Web Designer</h1>
          </div>
          <div className="banner-more-details">
            <p className="banner-logos-based">Based On Cagayan De Oro</p>
            <div className="banner-logos">
              <img src={google} alt="google logo" />
              <img src={um} alt="university of michigan logo" />
            </div>
          </div>
          <div className="banner-btns">
            <Button text="My Resume" buttonType={"btn-fill"} />
            <Button text="Need A Developer" buttonType={"btn-ghost"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
