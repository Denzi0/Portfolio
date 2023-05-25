import "./Banner.css";
import myimage from "../../../assets/images/home.svg";
import Button from "../../../components/Button";
function Banner() {
  return (
    <>
      <div className="banner-container" id="banner-id">
        <div className="container">
          <div className="banner-content">
            <div className="banner-details">
              <p className="banner-details-intro">
                Hi my name is Denzel and I am a
              </p>
              <h1 className="banner-details-webDeveloper">Web Developer</h1>
              <h1 className="banner-details-webDesigner transparent-text">
                & Web Designer
              </h1>
              <p>
                I'm an experienced and dedicated web deverloper/designer with a
                passion for creating beautiful, responsive websites. With over
                1/2 years of experience in the industry, I specialize in
                creating user-friendly, visually appealing websites from start
                to finish.
              </p>
              <div className="banner-btns">
                <Button buttonType={"btn-fill"} url="projects-id">
                  Discover my work
                </Button>
                <Button buttonType={"btn-ghost"} url="contact-id">
                  Need A Developer ?
                </Button>
              </div>
            </div>
            <div className="banner-image">
              <img src={myimage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
