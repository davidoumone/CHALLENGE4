import React from "react";
import { Grid } from "@material-ui/core";
import "./PageContact.css";

const PageContact = () => {
  return (
    <div>
      <form>
        <Grid
          container
          direction="column"
          alignItems="center"
          className="PageContainerContact"
        >
          <Grid item xs={55} className="PageContainerform">
            <label htmlFor="adresseEmail">Your email address:</label>
            <input
              type="text"
              id="adresseEmail"
              placeholder="wilcircus@gmail.com"
            />
          </Grid>

          <Grid item xs={12} className="PageContainerform2">
            <label htmlFor="adresseEmail">Your password:</label>
            <input type="text" id="adresseEmail" placeholder="" />
          </Grid>

          <Grid item xs={12} className="PageContainerform3">
            <input type="submit" name="nom" value="Send" />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PageContact;
