import React from "react";

export default function IconLink({ icon, iconUrl, children }) {
  return (
    <a href={iconUrl} target="_blank">
      {children}
    </a>
  );
}
