import React from "react";
import classes from "./Impressum.module.css";
import { Fade } from "@material-ui/core";

export default function Impressum() {
  return (
    <Fade in={true} timeout={500}>
      <div className={classes.Container}>
        <h1 className={classes.header}>Impressum</h1>
        <div className={classes.paragraph}>
          <p>
            <strong>
              BestBann Weronika Pozłutko
              <br />
              Owner: Weronika Pozłutko
              <br />
            </strong>
            <p>
              <strong>Address:</strong>
              <br />
              BestBann Weronika Pozłutko
              <br />
              Sapiehy 21
              <br />
              31-644 Krakow
              <br />
              POLAND, EU
            </p>
            <br />
            <p>
              <strong>Contact:</strong>
              <br />
              Tel.: +48 692 933 069
              <br />
              E-mail: office@bestbann.com
            </p>
            <br />
            <p>
              VAT id No: PL7382058254
              <br />
              NIP: 7382058254
              <br />
              REGON: 360825865
            </p>
            <br />
            <strong>Picture credits:</strong>
            <br />
            Product pictures: BestBann
            <br />
            Further pictures: AdobeStock
          </p>
        </div>
      </div>
    </Fade>
  );
}
