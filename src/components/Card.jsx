import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Card({ subTitle, title, link }) {
  return (
    <div className="about-card">
      <p>{subTitle}</p>
      <h3>{title}</h3>
      <a href={link} className="about-link">
        <span>View Live Site</span> <BsFillArrowRightCircleFill />
      </a>
    </div>
  );
}
