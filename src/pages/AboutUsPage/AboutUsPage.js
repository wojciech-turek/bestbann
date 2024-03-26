import React from "react";
import classes from "./AboutUsPage.module.css";
import owners from "../../assets/weronikaimichal.jpg";
import baskets from "../../assets/stoskoszykow.jpg";
import michal from "../../assets/michalsprawdza.jpg";
import provider from "../../assets/fabryka.jpg";
import bread from "../../assets/wypieczonychleb.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { Fade } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import SEO from "../../utils/SEO";

export default function AboutUsPage() {
  const { t } = useTranslation("common");
  return (
    <Fade in={true} timeout={500}>
      <div className={classes.Container}>
        <SEO title={t("menu.aboutUs")} />
        <section className={classes.aboutUsWrap}>
          <div className={classes.introWrap}>
            <h1 className={classes.introTitle}>{t("aboutUsPage.thankyou")}</h1>
            <p className={classes.introText}>{t("aboutUsPage.welcome")}</p>
            <p className={classes.introText}>- {t("aboutUsPage.owners")}</p>
          </div>
          <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
            <div className={classes.pairWrap}>
              <img
                src={owners}
                alt="Owners Weronika and Michal"
                className={classes.image}
              />

              <div className={classes.paragWrap}>
                <p className={classes.title}>
                  {t("aboutUsPage.familycompany.title").toUpperCase()}
                </p>
                <p className={classes.text}>
                  {t("aboutUsPage.familycompany.text")}
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
            <div className={classes.pairWrap}>
              <img
                src={baskets}
                alt="Baskets Stacked"
                className={classes.image}
                style={{ order: 2 }}
              />
              <div className={classes.paragWrap}>
                <p className={classes.title}>
                  {t("aboutUsPage.ourproducts.title").toUpperCase()}
                </p>
                <p className={classes.text}>
                  {t("aboutUsPage.ourproducts.text")}
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
            <div className={classes.pairWrap}>
              <img src={michal} alt="Quality Check" className={classes.image} />
              <div className={classes.paragWrap}>
                <p className={classes.title}>
                  {t("aboutUsPage.naturalmaterials.title").toUpperCase()}
                </p>
                <p className={classes.text}>
                  {t("aboutUsPage.naturalmaterials.text")}
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
            <div className={classes.pairWrap}>
              <img
                src={provider}
                alt="Vietnam Factory"
                className={classes.image}
                style={{ order: 2 }}
              />
              <div className={classes.paragWrap}>
                <p className={classes.title}>
                  {t("aboutUsPage.transformingcommunities.title").toUpperCase()}
                </p>
                <p className={classes.text}>
                  {t("aboutUsPage.transformingcommunities.text")}
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
            <div className={classes.pairWrap}>
              <img src={bread} alt="Bread" className={classes.image} />
              <div className={classes.paragWrap}>
                <p className={classes.title}>
                  {t("aboutUsPage.joinourfamily.title").toUpperCase()}
                </p>
                <p className={classes.text}>
                  {t("aboutUsPage.joinourfamily.text")}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </div>
    </Fade>
  );
}
