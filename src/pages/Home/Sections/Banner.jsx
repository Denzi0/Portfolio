import "./Banner.css";
import google from "../../../assets/images/google-icon.png";
import um from "../../../assets/images/university-of-michigan-logo.png";
import myimage from "../../../assets/images/user-image.jpg";
import Button from "../../../components/Button";
function Banner() {
  return (
    <>
      <div className="banner-container flex-container" id="banner-id">
        <div className="container">
          <div className="banner-details">
            <p className="banner-details-intro">
              👋 Hi my name is Denzel and I am a
            </p>
            <h1 className="banner-details-webDeveloper">Web Developer</h1>
            <h1 className="banner-details-webDesigner transparent-text">
              & Web Designer
            </h1>
          </div>
          <div className="banner-more-details flex-container">
            <p className="banner-logos-based">Based On Philippines</p>
            <div className="banner-logos">
              <img src={google} alt="google logo" />
              <img src={um} alt="university of michigan logo" />
            </div>
          </div>
          {/* <img src={myimage} /> */}
          <div className="banner-btns">
            <Button text="Discover my work" buttonType={"btn-fill"} />
            <Button text="Need A Developer ?" buttonType={"btn-ghost"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
