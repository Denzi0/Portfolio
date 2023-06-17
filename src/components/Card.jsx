import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./Card.css";
export default function Card({ subTitle, title, link, linkName }) {
  return (
    <div className="card">
      <p>{subTitle}</p>
      <h3>{title}</h3>
      <a href={link} className="about-link" target="_blank">
        <span>{linkName}</span> <BsFillArrowRightCircleFill />
      </a>
    </div>
  );
}
