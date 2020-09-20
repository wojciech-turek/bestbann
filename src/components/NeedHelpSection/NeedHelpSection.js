import React from "react";
import classes from "./NeedHelpSection.module.css";
import CSImage from "../../assets/csimage2.png";
import MessengerSVG from "../../assets/messenger.svg";
import WhatsappSVG from "../../assets/whatsapp.svg";

export default function NeedHelpSection() {
  return (
    <div className={classes.Container}>
      <img src={CSImage} alt="Customer Service" className={classes.CSImage} />
      <h2 className={classes.sideTitle}>Do you have any questions?</h2>
      <p>Our friendly Customer Service is here to answer them all!</p>
      <p>
        If you are a bakery owner/employee and you're interested in bulk order,
        please reach us at:
        <br />
        <span className={classes.email}>
          <strong>
            <a href="mailto:shop@bestbann.com">shop@bestbann.com</a>
          </strong>
        </span>
      </p>
      <p>
        If you are an individual client or you would like to request a sample,
        please visit our store:
        <br />
        <span className={classes.email}>
          <strong>
            <a href="https://bestbannshop.eu/" target="blank" alt="store link">
              www.bestbannshop.eu
            </a>
          </strong>
        </span>
      </p>
      <p>For a quick chat, choose one of the below options:</p>
      <br />
      <div className={classes.socialIcons}>
        <a href="http://m.me/bestbann" target="blank" alt="messenger contact">
          <img
            className={classes.socialContact}
            src={MessengerSVG}
            alt="Messenger Icon"
          />
        </a>
        <a
          href="https://wa.me/+48531600102"
          target="blank"
          alt="messenger contact"
        >
          <img
            className={classes.socialContact}
            src={WhatsappSVG}
            alt="Messenger Icon"
          />
        </a>
      </div>
    </div>
  );
}
