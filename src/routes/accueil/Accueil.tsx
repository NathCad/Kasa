import "./accueil.scss";
import { AppartementSummaryDTO } from "../../api/appartementsService";
import { Link, useLoaderData } from "react-router-dom";

const Accueil = () => {
  const appartements = useLoaderData() as AppartementSummaryDTO[];
  return (
    <section id="page-accueil">
      <h1>Chez vous, partout et ailleurs</h1>

      <div className="gallery">
        {appartements.map((item) => (
          <Link key={item.id} to={`/appartements/${item.id}`}>
            <article>
              <img src={item.cover} alt={item.title} />
              <h2>{item.title}</h2>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Accueil;
