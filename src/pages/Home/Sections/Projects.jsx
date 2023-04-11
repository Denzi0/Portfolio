import Tabs from "../../../components/Tabs";
import "./Projects.css";
import webDesign1 from "../../../assets/images/FURCARE.png";
import webDesign2 from "../../../assets/images/FURCARE.png";

function Projects() {
  const tabs = [
    {
      id: 1,
      title: "Web Design",
      content: "This is tab 1 content",
      webDesign: [
        {
          image: webDesign1,
          content: "lorem2 sdfs dfsdf sdf",
        },
        {
          image: webDesign2,
          content: "lorem2 sdfs dfsdf sdf",
        },
        {
          image: webDesign1,
          content: "lorem2 sdfs dfsdf sdf",
        },
      ],
    },
    {
      id: 2,
      title: "Live Web Sites",
      content: "This is tab 2 content",
    },
    {
      id: 3,
      title: "Mobile App Design",
      content: "This is tab 3 content",
    },
  ];

  return (
    <div className="projects-section flex-container-vertical" id="projects-id">
      <div className="container projects-container flex-container">
        <div className="projects-details">
          <h2>
            Projects & <br />
            <span className="transparent-text">Case Studies</span>
          </h2>
        </div>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Projects;
