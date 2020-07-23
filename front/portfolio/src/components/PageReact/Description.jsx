import React from "react";
import { Grid } from "@material-ui/core";

const Description = ({ description }) => {
  console.log("desc: ", description)
  return (
    <div>
      
        <>
          <Grid
            container
            column
            justify="center"
            alignItems="space-between"
          ></Grid>
          <Grid item xs={12}>
            <h1>Description</h1>
          </Grid>
          <Grid item xs={12}>
            <p>{description.text}</p>
          </Grid>
          <Grid item xs={12}>
            <a href={description.link} target="blank" title="herodex">
              {description.alt}
            </a>
          </Grid>
        </>
    </div>
  );
};

export default Description;
