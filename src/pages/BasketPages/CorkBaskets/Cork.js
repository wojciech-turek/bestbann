import React from "react";
import DividerLine from "../../../components/UI/DividerLine/DividerLine";
import classes from "./Cork.module.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTranslation } from "react-i18next";
import NeedHelpSection from "../../../components/NeedHelpSection/NeedHelpSection";
import baguette from "../../../assets/imgs/IMG_0010.JPG";

import korek1 from "../../../assets/videos/korek1.mp4";
import ciasto1 from "../../../assets/videos/ciasto1.mp4";
import korekfront1 from "../../../assets/videos/korekf1.mp4";
import korekfront2 from "../../../assets/videos/korekf2.mp4";
import korekfront3 from "../../../assets/videos/korekf3.mp4";
import korekfront4 from "../../../assets/videos/korekf4.mp4";
import korekfront5 from "../../../assets/videos/korekf5.mp4";
import korekfront6 from "../../../assets/videos/korekf6.mp4";
import korekfront7 from "../../../assets/videos/korekf7.mp4";
import korekfront8 from "../../../assets/videos/korekf8.mp4";
import korekfront9 from "../../../assets/videos/korekf9.mp4";
import korekfront10 from "../../../assets/videos/korekf10.mp4";
import korekfront11 from "../../../assets/videos/korekf11.mp4";
import korekfront12 from "../../../assets/videos/korekf12.mp4";
import korekfront13 from "../../../assets/videos/korekf13.mp4";
import korekfront14 from "../../../assets/videos/korekf14.mp4";
import { Fade } from "@material-ui/core";
import SEO from "../../../utils/SEO";
import Loader from "../../../components/Loader/Loader";

export default function BreadproofingBaskets(props) {
  const { t } = useTranslation("common");

  const basketTypes = {
    roundBreadProofing: {
      title: "",
      imageTypeRO: null,
      imageTypeROX: null,
      typeO: "",
      typeOX: "",
      imageType: "",
    },
  };

  const Round = [
    createData("250 g / 0,55 lb", '⌀ 17 cm / 6,7"', "RO KB0250K"),
    createData("500 g / 1,10 lb", '⌀ 19 cm / 7,5"', "RO KB0500D"),
    createData("750 g / 1,65 lb", '⌀ 21 cm / 8,3"', "RO KB0750L"),
    createData("1000 g / 2,20 lb", '⌀ 23 cm / 9"', "RO KB1000U"),
    createData("1500 g / 3,30 lb", '⌀ 25 cm / 9,8"', "RO KB1500Y"),
    createData("2000 g / 4,40 lb", '⌀ 27 cm / 10,6"', "RO KB2000B"),
  ];

  const Oblong = [
    createData("250 g / 0,55 lb", '20 x 12 cm / 7.9 x 4.7"', "LO KB0250K"),
    createData("500 g / 1,10 lb", '22,5 x 13 cm / 8.9 x 5.1"', "LO KB0500D"),
    createData("750 g / 1,65 lb", '27 x 14,5 cm / 10.6 x 5.7"', "LO KB0750L"),
    createData("1000 g / 2,20 lb", '31 x 14,5 cm / 12.2 x 5.7"', "LO KB1000U"),
    createData("1500 g / 3,30 lb", '36 x 15 cm / 14.2 x 5.9"', "LO KB1500Y"),
    createData("2000 g / 4,40 lb", '39 x 16 cm / 15.4 x 6.3"', "LO KB2000B"),
  ];

  const Oval = [
    createData("250 g / 0,55 lb", '18 x 13 cm / 7 x 5.1"', "OV KB0250K"),
    createData("500 g / 1,10 lb", '20 x 14,5 cm / 7.9 x 5.7"', "OV KB0500D"),
    createData("750 g / 1,65 lb", '25 x 15,5 cm / 9.8 x 6.1"', "OV KB0750L"),
    createData("1000 g / 2,20 lb", '29 x 15,5 cm / 11.4 x 6.1"', "OV KB1000U"),
    createData("1500 g / 3,30 lb", '32 x 18 cm / 12.6 x 7"', "OV KB1500Y"),
    createData("2000 g / 4,40 lb", '36 x 18 cm / 14.1 x 7"', "OV KB2000B"),
  ];

  const Rectangular = [
    createData("250 g / 0,55 lb", '20 x 12 cm / 7.9 x 4.7"', "LW KB0250K"),
    createData("500 g / 1,10 lb", '22,5 x 13 cm / 8.9 x 5.1"', "LW KB0500D"),
    createData("750 g / 1,65 lb", '27 x 14,5 cm / 10.6 x 5.7"', "LW KB0750L"),
    createData("1000 g / 2,20 lb", '31 x 14,5 cm / 12.2 x 5.7"', "LW KB1000U"),
    createData("1500 g / 3,30 lb", '36 x 15 cm / 14.2 x 5.9"', "LW KB1500Y"),
    createData("2000 g / 4,40 lb", '39 x 16 cm / 15.4 x 6.3"', "LW KB2000B"),
  ];

  const Baguette = [
    createData("250 g / 0,55 lb", '40 x 10 cm / 15.7 x 3.9"', "BG KB0250K"),
    createData("500 g / 1,10 lb", '46 x 10 cm / 18 x 3.9"', "BG KB0500D"),
  ];

  let tableRows = [];
  switch (props.title) {
    case "CorkRound":
      basketTypes.roundBreadProofing.title = t("productDetails.corkRound");
      basketTypes.imageTypeRO = korekfront1;
      basketTypes.imageTypeROX = korekfront2;
      basketTypes.imageTypeROE = korekfront3;
      tableRows = Round;
      basketTypes.typeO = " RO";
      basketTypes.typeOX = " ROX";
      basketTypes.typeOE = " ROE";
      basketTypes.imageType = "video";
      break;
    case "CorkOblong":
      basketTypes.roundBreadProofing.title = t("productDetails.corkOblong");
      tableRows = Oblong;
      basketTypes.imageTypeRO = korekfront7;
      basketTypes.imageTypeROX = korekfront8;
      basketTypes.imageTypeROE = korekfront9;
      basketTypes.typeO = " LO";
      basketTypes.typeOX = " LOX";
      basketTypes.typeOX = " LOE";
      basketTypes.imageType = "video";
      break;
    case "CorkOval":
      basketTypes.roundBreadProofing.title = t("productDetails.corkOval");
      tableRows = Oval;
      basketTypes.imageTypeRO = korekfront4;
      basketTypes.imageTypeROX = korekfront5;
      basketTypes.imageTypeROE = korekfront6;
      basketTypes.typeO = " OV";
      basketTypes.typeOX = " OVX";
      basketTypes.typeOX = " OVE";
      basketTypes.imageType = "video";
      break;
    case "CorkBaguette":
      basketTypes.roundBreadProofing.title = t("productDetails.corkBaguette");
      tableRows = Baguette;
      basketTypes.imageTypeRO = baguette;
      basketTypes.typeO = " BG";
      basketTypes.imageType = "photo";
      break;
    case "CorkRectangular":
      basketTypes.roundBreadProofing.title = t(
        "productDetails.corkRectangular"
      );
      tableRows = Rectangular;
      basketTypes.imageTypeRO = korekfront10;
      basketTypes.imageTypeROX = korekfront11;
      basketTypes.imageTypeROE = korekfront12;
      basketTypes.typeO = "RO";
      basketTypes.typeOX = "ROX";
      basketTypes.typeOX = "ROE";
      basketTypes.imageType = "video";
      break;
    case "CorkEngraved":
      basketTypes.roundBreadProofing.title = t("productDetails.corkEngraved");
      basketTypes.imageTypeRO = korekfront13;
      basketTypes.imageTypeROX = korekfront14;
      basketTypes.typeO = " SQ";
      basketTypes.typeOX = " SQX";
      basketTypes.imageType = "video";
      break;
    default:
  }

  const columns = [
    { id: "weight", label: t("productDetails.tableDough"), minWidth: 50 },
    { id: "size", label: t("productDetails.tableMeasures"), minWidth: 50 },
    {
      id: "catalog",
      label: t("productDetails.tableCatalog"),
      minWidth: 60,
    },
  ];

  function createData(weight, size, catalog) {
    return { weight, size, catalog };
  }

  return (
    <Fade in={true} timeout={500}>
      <div className={classes.Container}>
        <SEO title={basketTypes.roundBreadProofing.title} />
        <div className={classes.wrapper}>
          <div className={classes.productDetails}>
            <h1 className={classes.productTitle}>
              {basketTypes.roundBreadProofing.title}
            </h1>
            <DividerLine height="3px" width="10%" color="darkred" />
            <div className={classes.basketTypes}>
              <div
                className={classes.type}
                style={!basketTypes.imageTypeRO ? { display: "none" } : {}}
              >
                <h3 className={classes.typeTitle}>
                  {t("productDetails.corkPlain")}
                </h3>
                <DividerLine height="2px" width="12%" color="rgb(255,195,11)" />
                {basketTypes.imageType === "photo" ? (
                  <img
                    src={basketTypes.imageTypeRO}
                    className={classes.typeImage}
                    alt=""
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    className={classes.typeImage}
                    src={basketTypes.imageTypeRO}
                    alt="Small round bamboo fiber basket"
                  />
                )}
              </div>
              <div
                className={classes.type}
                style={!basketTypes.imageTypeROX ? { display: "none" } : {}}
              >
                <h3 className={classes.typeTitle}>
                  {t("productDetails.corkGroovedSides")}
                </h3>
                <DividerLine height="2px" width="12%" color="rgb(255,195,11)" />
                {basketTypes.imageType === "photo" ? (
                  <img
                    src={basketTypes.imageTypeROx}
                    className={classes.typeImage}
                    alt=""
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    className={classes.typeImage}
                    src={basketTypes.imageTypeROX}
                    alt="Round bamboo fiber basket"
                  />
                )}
              </div>
              <div
                className={classes.type}
                style={!basketTypes.imageTypeROE ? { display: "none" } : {}}
              >
                <h3 className={classes.typeTitle}>
                  {t("productDetails.corkGrooved")}
                </h3>
                <DividerLine height="2px" width="12%" color="rgb(255,195,11)" />
                {basketTypes.imageType === "photo" ? (
                  <img
                    src={basketTypes.imageTypeROE}
                    className={classes.typeImage}
                    alt=""
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    className={classes.typeImage}
                    src={basketTypes.imageTypeROE}
                    alt="Round bamboo fiber basket"
                  />
                )}
              </div>
            </div>
            {props.title !== "CorkEngraved" ? (
              <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              minWidth: column.minWidth,
                              padding: 8,
                            }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableRows.map((row) => {
                        return (
                          <TableRow hover key={row.catalog}>
                            {columns.map((column) => {
                              let value = row[column.id];
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{
                                    padding: 8,
                                  }}
                                >
                                  {value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            ) : null}
            {props.title !== "CorkEngraved" ? (
              <div className={classes.productInfo}>
                <h2 className={classes.productTitle}>
                  {t("productInfo.title")}
                </h2>
                <div className={classes.productInfoFlex}>
                  <ul className={classes.productInfoList}>
                    <li>
                      <strong>{t("productInfo.cork.line1")}</strong>
                    </li>
                    <li>{t("productInfo.cork.line2")}</li>
                    <li>
                      <strong>{t("productInfo.cork.line3")}</strong>
                    </li>
                    <li>{t("productInfo.cork.line4")}</li>
                    <li>{t("productInfo.cork.line5")}</li>
                    <li>{t("productInfo.cork.line6")}</li>
                    <li>
                      <strong>{t("productInfo.cork.line7")}</strong>
                    </li>
                    <li>{t("productInfo.cork.line8")}</li>
                    <strong>
                      {" "}
                      <li>{t("productInfo.cork.line9")}</li>
                    </strong>
                    <li>{t("productInfo.cork.line10")}</li>
                    <li>{t("productInfo.cork.line11")}</li>
                    <li>
                      <strong>{t("productInfo.cork.line12")}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <h2 className={classes.message}>
                {t("productDetails.engravedMessage")}
              </h2>
            )}
          </div>
          <div className={classes.side}>
            <NeedHelpSection />
          </div>
        </div>
        <div className={classes.videos}>
          <video
            src={korek1}
            loop
            autoPlay
            muted
            preload="auto"
            className={classes.video}
          ></video>
          <video
            src={ciasto1}
            loop
            autoPlay
            muted
            preload="auto"
            className={classes.video}
          ></video>
        </div>
      </div>
    </Fade>
  );
}
