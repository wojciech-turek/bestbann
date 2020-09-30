import React from "react";
import classes from "./AboutUsPage.module.css";
import owners from "../../assets/weronikaimichal.jpg";
import baskets from "../../assets/stoskoszykow.jpg";
import michal from "../../assets/michalsprawdza.jpg";
import provider from "../../assets/fabryka.jpg";
import bread from "../../assets/wypieczonychleb.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUsPage() {
  return (
    <div className={classes.Container}>
      <section className={classes.aboutUsWrap}>
        <div className={classes.introWrap}>
          <p className={classes.introTitle}>Thank you for visting our page!</p>
          <p className={classes.introText}>
            We're very pleased to be able to introduce ourselves and tell you
            about us and what we do. We will gladly share more details and have
            a chat so please do not hesitate to contact us!
          </p>
          <p className={classes.introText}>- Weronika and Michal</p>
        </div>
        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
          <div className={classes.pairWrap}>
            <img
              src={owners}
              alt="Owners Weronika and Michal"
              className={classes.image}
            />

            <div className={classes.paragWrap}>
              <p className={classes.title}>FAMILY COMPANY</p>
              <p className={classes.text}>
                We are a family owned company with over 12-years’ of experience
                in the food industry. Family values are very important to us and
                that is why we treat each customer as a member of our great
                bakers family. We're positive, honest, brave and determined to
                give our best and create only the best products.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true}>
          <div className={classes.pairWrap}>
            <img
              src={baskets}
              alt="Baskets Stacked"
              className={classes.image}
              style={{ order: 2 }}
            />
            <div className={classes.paragWrap}>
              <p className={classes.title}>OUR PRODUCTS</p>
              <p className={classes.text}>
                We are producing bread proofing baskets, also called bannetons
                by our own hands, with the utmost care. For many years we have
                been improving in this very difficult craft to ensure the
                highest quality of our products. We're deeply engaged and
                passionate about our work.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
          <div className={classes.pairWrap}>
            <img src={michal} alt="Quality Check" className={classes.image} />
            <div className={classes.paragWrap}>
              <p className={classes.title}>NATURAL MATERIALS</p>
              <p className={classes.text}>
                Baskets are made of natural rattan material, do not contain
                preservatives or bleaches. We carefully select our suppliers to
                ensure that the material is suitable to our needs.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true}>
          <div className={classes.pairWrap}>
            <img
              src={provider}
              alt="Vietnam Factory"
              className={classes.image}
              style={{ order: 2 }}
            />
            <div className={classes.paragWrap}>
              <p className={classes.title}>TRANSFORMING COMMUNITIES</p>
              <p className={classes.text}>
                By indirect sustainable job creation in distant locations in
                Asia, we empower our suppliers, their workers and all their
                families to break the cycle of poverty and build a brighter
                future.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
          <div className={classes.pairWrap}>
            <img src={bread} alt="Bread" className={classes.image} />
            <div className={classes.paragWrap}>
              <p className={classes.title}>JOIN OUR BESTBANN BAKERS FAMILY</p>
              <p className={classes.text}>
                With the determination to continuous improvement of production
                processes and expanding the range of products, we are able to
                offer numerous types and sizes of bread proofing baskets, which
                we have already delivered to almost all continents, to more than
                30 countries. We successfully cooperate with huge wholesalers,
                online stores, bakeries, hotels and restaurants, as well as with
                individual customers.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
