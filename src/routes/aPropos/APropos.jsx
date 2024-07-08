import React from "react";
import DropDownPanel from "../../components/DropDownPanel";
import "./APropos.scss";


const APropos = () => {

  return (
    <section id="page-a-propos">
      <img
        src="/montainBackground.png"
        alt="Image d'une vallée arborée avec des montagnes aux sommets enneigés"
      />
      <div id="page-a-propos-content">
        <DropDownPanel
          title="Fiabilité"
        >
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </DropDownPanel>
        <DropDownPanel
          title="Respect"
        >
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une expulsion de notre plateforme.
          </p>
        </DropDownPanel>
        <DropDownPanel
          title="Service"
        >
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une expulsion de notre plateforme.
          </p>
        </DropDownPanel>
        <DropDownPanel
          title="Sécurité"
        >
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour nos voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </DropDownPanel>
      </div>
    </section>
  );
};
export default APropos;
