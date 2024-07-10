import React from "react";
import "./appartement.scss";

import { useLoaderData } from "react-router-dom";
import Carousel from "../../components/Carousel";

const Appartement = () => {
  const appartement = useLoaderData();
  return (
    <div id="page-appartement">
      <Carousel
        data={appartement.pictures}
        appartementName={appartement.title}
      />
    </div>
  );
};

export default Appartement;
