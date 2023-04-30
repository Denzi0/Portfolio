import React from "react";
import "./Sidebar.css";
export default function Sidebar({ isCardClick }) {
  const websiteLiveLists = [
    {
      name: "Albany Event Hire",
    },
    {
      name: "BTA Forward Event hire",
    },
  ];
  return (
    <aside className={`sidebar-container ${isCardClick ? "show" : ""}`}>
      <ul>
        {websiteLiveLists.map((websiteLiveList) => {
          return <li>{websiteLiveList.name}</li>;
        })}
      </ul>
    </aside>
  );
}
