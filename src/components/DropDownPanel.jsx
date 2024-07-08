import React, { useState } from "react";

import "./dropDownPanel.scss";

const DropDownPanel = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="drop-down-panel">
        <h1>
          {title} <button onClick={() => setOpen(!open)}>x</button>
        </h1>
        {open && <div>{children}</div>}
      </article>
    </>
  );
};

export default DropDownPanel;
