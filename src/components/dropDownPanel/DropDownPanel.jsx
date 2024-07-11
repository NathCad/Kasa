import React, { useState } from "react";
import "./dropDownPanel.scss";
import { Arrow } from "../../assets/Arrow";

const DropDownPanel = ({ title, children, heading = "h1" }) => {
  const [open, setOpen] = useState(false);
  const Heading = heading;
  return (
    <>
      <article className={`drop-down-panel${open ? " open" : ""}`}>
        <Heading className="drop-down-panel-title">
          {title}
          <button onClick={() => setOpen(!open)}>
            <Arrow />
          </button>
        </Heading>
        <div className="drop-down-panel-content">{children}</div>
      </article>
    </>
  );
};

export default DropDownPanel;
