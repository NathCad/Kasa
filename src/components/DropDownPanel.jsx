import React, { useState } from "react";
import "./dropDownPanel.scss";
import { Arrow } from "./../assets/Arrow";

const DropDownPanel = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className={`drop-down-panel${open ? " open" : ""}`}>
        <h1>
          {title}
          <button onClick={() => setOpen(!open)}>
            <Arrow />
          </button>
        </h1>
        <div className="drop-down-panel-content">{children}</div>
      </article>
    </>
  );
};

export default DropDownPanel;
