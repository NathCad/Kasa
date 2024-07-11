import React from "react";
import "./rating.scss";
import Star from "../../assets/Star";

const Rating = ({ rating }) => {
    
  return (
    <div className={"rating"}>
      {[1, 2, 3, 4, 5].map((r) => (
        <Star key={"rating" + r} className={rating >= r ? "active" : ""} />
      ))}
    </div>
  );
};

export default Rating;
