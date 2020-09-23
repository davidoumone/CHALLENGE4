import React from "react";
import { Grid } from "@material-ui/core";
import gifboat from "../../images/gif.webp"
import "./PageHome.css";
import Footer from "../Footer";

const PageHome = () => {
  return (
    <div>
      <Grid
        container
        column
        justify="center"
        alignItems="center"
        className="PageContainerHome"
      >
        <Grid item xs={15}>
          <h1>introduction a la programmation</h1>
        </Grid>
        <Grid item xs={12}>
          <p>
            Dans le domaine de l'informatique, la programmation, appelée aussi
            codage1, est l'ensemble des activités qui permettent l'écriture des
            programmes informatiques. C'est une étape importante du
            développement de logiciels (voire de matériel).
          </p>
        </Grid>

        <Grid item xs={12}>
          <p>
            L'écriture d'un programme se fait dans un langage de programmation.
            Un logiciel est un ensemble de programmes (qui peuvent être écrits
            dans des langages de programmation différents) dédié à la
            réalisation de certaines tâches par un (ou plusieurs) utilisateurs
            du logiciel.
          </p>
        </Grid>

        <Grid item xs={12}>
          <p>
            La programmation représente donc ici la rédaction du code source
            d'un logiciel. On utilise plutôt le terme développement pour dénoter
            l'ensemble des activités liées à la création d'un logiciel et des
            programmes qui le composent. Cela inclut la spécification du
            logiciel, sa conception, puis son implémentation proprement dite au
            sens de l'écriture des programmes dans un langage de programmation
            bien défini et aussi la vérification de sa correction, etc.
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>
            Dans cette application, vous allez voir différentes technos
            accompagné d'un projet expliquant les différentes méthodes d'une
            techno en particulier (exemple: react, sql, express ...). Nous
            allons nous concentrer pour l'instant sur react et node car ce sont
            les deux technos principaux d'un développeur en js. Pour pouvoir
            naviguer correctement dans cette application , veuillez utiliser la
            barre de navigation afin d'accéder aux différentes pages de l'appli.
          </p>
        </Grid>
        <Grid item xs={15}>
          <h2>Bon voyage !</h2>
        </Grid>
        <Grid item xs={12}>
          <img
            alt=""
            src={gifboat}
          />
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
};

export default PageHome;
