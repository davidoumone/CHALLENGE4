import React from "react";
import { Grid } from "@material-ui/core";

const Description = () => {
  return (
    <div>
      <Grid container column justify="center" alignItems="space-between"></Grid>
      <Grid item xs={12}>
        <h1>Description</h1>
      </Grid>
      <Grid item xs={12}>
        <p>
          Hérodex a été réalisé essentiellement avec réact ( réact, réact-dom,
          react-burger-menu, react-router-dom, react-scripts, reacstrap), et
          matérial ui (material-ui/core, matérial-ui/lab). Je me permets aussi
          de citer mes collègues Pierre et Lucas qui ont participé a la
          réalisation du projet basé sur la méthode SCRUM. Ce projet a vu le
          jour le 15 mai 2020. Le lien qui se trouve juste en dessous vous
          emmènera directement sur l’application. Bonne présentation
        </p>
      </Grid>
      <Grid item xs={12}>
        <a href="https://herodex.netlify.app/" target="blank" title="herodex">
          {" "}
          herodex{" "}
        </a>
      </Grid>
    </div>
  );
};

export default Description;
