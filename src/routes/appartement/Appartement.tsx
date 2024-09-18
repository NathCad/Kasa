import React from "react";
import "./appartement.scss";

import Carousel from "../../components/carousel/Carousel";
import DropDownPanel from "../../components/dropDownPanel/DropDownPanel";
import Avatar from "../../components/avatar/Avatar";
import Tags from "../../components/tags/Tags";
import Rating from "../../components/rating/Rating";
import { AppartementDTO } from "../../api/appartementsService";
import { useLoaderData } from "react-router-dom";

const Appartement = () => {
  const appartement = useLoaderData() as AppartementDTO;
  return (
    <section id="page-appartement">
      <Carousel
        data={appartement.pictures}
        appartementName={appartement.title}
      />
      <div className="page-appartement-content">
        <div className="page-appartement-content-title-host-rating-tags">
          <h1>
            {appartement.title}
            <span>{appartement.location}</span>
          </h1>
          <Avatar
            name={appartement.host.name}
            image={appartement.host.picture}
            heading="h2"
          />
          <Tags tags={appartement.tags} />
          <Rating rating={appartement.rating} />
        </div>
        <div className="page-appartement-content-description-equipements">
          <div className="page-appartement-content-description">
            <DropDownPanel title={"Description"} heading="h2">
              <p>{appartement.description}</p>
            </DropDownPanel>
          </div>
          <div className="page-appartement-content-equipements">
            <DropDownPanel title={"Équipements"} heading="h2">
              <ul>
                {appartement.equipments.map((item, idx) => (
                  <li key={"equipement" + idx}>{item}</li>
                ))}
              </ul>
            </DropDownPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appartement;
