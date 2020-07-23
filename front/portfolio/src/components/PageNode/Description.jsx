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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          impedit consequuntur molestiae esse omnis ratione, natus
          exercitationem ad libero quae? Voluptatum eum eius ipsum cupiditate
          doloribus vero repellendus totam sint.
        </p>
        <Grid item xs={12}>
      <a href="https://nodejs.org/en/" target="blank" title="node"> Lien vers node </a>
      </Grid>
      </Grid>
    </div>
  );
};

export default Description;
