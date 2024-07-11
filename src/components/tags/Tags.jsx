import React from "react";
import "./tags.scss";

const Tags = ({ tags }) => {
  return (
    <ul className="tags">
      {tags.map((item, idx) => (
        <li key={"tag" + idx}>{item}</li>
      ))}
    </ul>
  );
};

export default Tags;
