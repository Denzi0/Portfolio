import { FaExternalLinkAlt } from "react-icons/fa";

import "./Sidebar.css";
export default function Sidebar({ isCardClick }) {
  const websiteLiveLists = [
    {
      id: 1,
      name: "Albany Event Hire",
      url: "www.albanyeventhire.com.au",
    },
    {
      id: 2,

      name: "BTA Forward Event hire",
      url: "www.bta4wd.com",
    },
    {
      id: 3,
      name: "JKC Real Estate",
      url: "www.jkcrealestate.com.au",
    },
    {
      id: 4,
      name: "1891 Tattoo",
      url: "www.1891tattoo.com",
    },
    {
      id: 5,
      name: "Stihl Shop Fulham",
      url: "www.stihlshopfulham.com.au",
    },
    {
      id: 6,
      name: "Irish Club Hotel",
      url: "www.irishclubhotel.com.au",
    },
    {
      id: 7,
      name: "De Oro Mediko",
      url: "www.deoromediko.com",
    },
  ];
  return (
    <aside className={`sidebar-container ${isCardClick ? "show" : ""}`}>
      <ul>
        {websiteLiveLists.map((websiteLiveList) => {
          return (
            <li key={websiteLiveList.id}>
              <a
                href={websiteLiveList.url}
                target="_blank"
                className="flex-container"
              >
                {websiteLiveList.name}
                <FaExternalLinkAlt />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
