import React from "react";
import "./avatar.scss";

const Avatar = ({ name, image, heading = "h1" }) => {
  const Heading = heading;
  return (
    <article className="avatar">
      <Heading className="avatar-title">{name}</Heading>
      <img src={image} alt={`image de ${name}`} />
    </article>
  );
};

export default Avatar;
