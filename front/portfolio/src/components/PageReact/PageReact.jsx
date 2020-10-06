import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Carousel from "./Carousel";
import Description from "./Description";
import "./PageReact.css";
import Footer from "../Footer";

const PageReact = () => {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [carousels, setCarousels] = useState([]);
  const [descriptions, setDescriptions] = useState(undefined);
  const [carouselsaintigny, setCarouselsaintigny] = useState([]);
  const [descriptionsaintigny, setDescriptionsaintigny] = useState(undefined);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/media/search/carouselherodex`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCarousels(data);
        fetch(`${API_BASE_URL}/api/description/1`)
          .then((res) => res.json())
          .then((desc) => {
            setDescriptions(desc);
            fetch(`${API_BASE_URL}/api/media/search/carouselsaintigny`)
          .then((res) => res.json())
          .then((data) => {
            setCarouselsaintigny(data);
            fetch(`${API_BASE_URL}/api/description/4`)
          .then((res) => res.json())
          .then((desc) => {
            setDescriptionsaintigny(desc);
          })
          })
          })
          .catch((error) => console.error(error.message));
      })
      .catch((error) => console.error(error.message));
  }, [API_BASE_URL]);

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className="PageContainerReact"
      >
        <Grid item xs={15}>
          <h1>React</h1>
        </Grid>
        <Grid item xs={12}>
          <h2>JavaScript de base</h2>
        </Grid>
        <Grid item xs={12}>
          <p>
            React est une bibliothèque JavaScript pour la construction
            d’interfaces utilisateur (UI). il est donc logique de connaître
            JavaScript avant d'apprendre React, non? Ne vous inquiétez pas, vous
            n'aurez pas besoin de connaître JavaScript par cœur - il vous suffit
            de connaître les bases:
            <ul>
              <li>Variables, fonctions, types de données</li>
              <li>Tableaux et objets</li>
              <li>
                Syntaxe ES6 (utilisation de let & const, fonctions fléchées,
                affectation de destruction, classes, importation / exportation,
                etc.)
              </li>
              <li>Comment JavaScript est utilisé pour manipuler le DOM</li>
            </ul>
          </p>
        </Grid>
        <Grid item xs={12}>
          <h2>HTML de base</h2>
        </Grid>
        <Grid item xs={12}>
          <p>
            Dans React, nous utilisons ce qu'on appelle JSX pour créer le code
            HTML de nos pages Web. Nous expliquerons JSX en détail plus tard,
            mais pour l'instant, assurez-vous d'avoir une bonne base en matière
            de HTML:
            <ul>
              <li>
                Comment structurer le HTML (comment imbriquer des éléments,
                etc.)
              </li>
              <li>Attributs HTML (comme "id", "class", "onclick", etc.)</li>
            </ul>
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>
            L'étape suivante consiste à créer un projet React. Heureusement pour
            nous, les bonnes personnes de Facebook ont ​​rendu cela très simple.
            Tout ce que nous avons à faire est d'exécuter une commande dans
            notre terminal: npx create-react-app my-app Cela crée un projet pour
            nous appelé "mon-application" et met tout en place automatiquement.
            Plutôt cool. Allez-y et ouvrez un terminal dans le répertoire dans
            lequel vous souhaitez créer votre application, par exemple un
            dossier «projets», et exécutez la commande. Laissez le terminal
            faire son travail, et après un certain temps, cela se terminera et
            vous montrera quelques commandes. Enchainez avex ces deux autre
            commandes: cd my-app et ensuite npm start. Cela démarrera un serveur
            de développement et ouvrira un navigateur Web pour vous.
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>
            Voici quelques projets réalisé au cours de ma formation pour vous
            montrer plus en détails les pratiques de react.
          </p>
        </Grid>
        <Grid item xs={12}>
          <h2>Projet hérodex</h2>
        </Grid>

        <Grid item xs={5}>
          {carousels.length > 0 && <Carousel media={carousels} folder="carouselReactHerodex" />}
        </Grid>

        <Grid item xs={5}>
          {descriptions && <Description description={descriptions} title="herodex" />}
        </Grid>

        <Grid item xs={12}>
          <h2>Mairie de Saintigny</h2>
        </Grid>
        <Grid item xs={5}>
          {carouselsaintigny.length > 0 && <Carousel media={carouselsaintigny} folder="carouselReactSaintigny" />}
        </Grid>

        <Grid item xs={5}>
          {descriptionsaintigny && <Description description={descriptionsaintigny} title="saintigny" />}
        </Grid>
        <Grid item xs={12}>
          <h2>Et je suis prêt pour de nouvelles aventures</h2>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
};

export default PageReact;
