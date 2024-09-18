import { PropsWithChildren, useState } from "react";
import "./dropDownPanel.scss";
import { Arrow } from "../../assets/Arrow";

type DropDownPanelProps ={
  title: string,
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
} & PropsWithChildren

const DropDownPanel = ({ title, children, heading = "h1" } : DropDownPanelProps) => {
  const [open, setOpen] = useState(false);
  //Transforme la chaine (h1 par ex) en Tag Jsx
  //Equivalent à React.createElement(heading);
  
  const Heading = heading;
  return (
    <article className={`drop-down-panel${open ? " open" : ""}`}>
      <Heading className="drop-down-panel-title">
        {title}
        <button onClick={() => setOpen(!open)}>
          <Arrow />
        </button>
      </Heading>
      <div className="drop-down-panel-content">{children}</div>
    </article>
  );
};

export default DropDownPanel;
