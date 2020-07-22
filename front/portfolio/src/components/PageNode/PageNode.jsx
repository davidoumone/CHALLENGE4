import React from "react";
import { Grid } from "@material-ui/core";
import Carousel from "./Carousel";
import Description from "./Description";

const PageNode = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={15}>
          <h1>Node</h1>
        </Grid>
        <Grid item xs={12}>
          <h2>Principe de Node</h2>
        </Grid>
        <Grid item xs={12}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            impedit consequuntur molestiae esse omnis ratione, natus
            exercitationem ad libero quae? Voluptatum eum eius ipsum cupiditate
            doloribus vero repellendus totam sint.
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            impedit consequuntur molestiae esse omnis ratione, natus
            exercitationem ad libero quae? Voluptatum eum eius ipsum cupiditate
            doloribus vero repellendus totam sint.
          </p>
        </Grid>
        <Grid item xs={12}>
          <h2>documentation de Node</h2>
        </Grid>

        <Grid item xs={5}>
          <Carousel />
        </Grid>

        <Grid item xs={5}>
          <Description />
        </Grid>
      </Grid>
    </div>
  );
};

export default PageNode;
