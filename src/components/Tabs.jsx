import { useState } from "react";

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <ul className="projects-tablists">
        {tabs.map((tab, index) => (
          <li
            onClick={() => handleTabClick(index)}
            key={tab.id}
            className={`projects-tab ${index === activeIndex ? "active" : ""}`}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="projects-content">
        {tabs.map((tab, index) => (
          <div key={index} className={index === activeIndex ? "active" : ""}>
            {tab.content}
            {tab.webDesign ? (
              <>
                <div className="project-images">
                  {tab.webDesign.map((webDesign, index) => (
                    <div key={index} className="project-image">
                      <img src={webDesign.image} alt="" />
                      <p>{webDesign.content}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>{tab.content}</p>
            )}
            {console.log(tab.webDesign)}
          </div>
        ))}
      </div>
    </>
  );
}

export default Tabs;
