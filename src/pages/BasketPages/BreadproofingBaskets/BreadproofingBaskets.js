import React from "react";
import DividerLine from "../../../components/UI/DividerLine/DividerLine";
import classes from "./BreadproofingBaskets.module.css";
import RoundROImage from "../../../assets/RoundROOptimized.jpg";
import RoundROXImage from "../../../assets/RoundROXOptimized.jpg";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTranslation } from "react-i18next";
import BasketsCertificationImage from "../../../assets/basketatest.png";
import NeedHelpSection from "../../../components/NeedHelpSection/NeedHelpSection";
import OblongRO from "../../../assets/OblongRO.jpg";
import OblongROX from "../../../assets/OblongROX.jpg";
import OvalRO from "../../../assets/OvalRO.jpg";
import OvalROX from "../../../assets/OvalROX.jpg";
import BaguetteRO from "../../../assets/BaguetteRO.jpg";
import BaguetteROX from "../../../assets/BaguetteROX.jpg";
import MiniRO from "../../../assets/miniRO.jpg";
import SquareROX from "../../../assets/SquareROX.jpg";
import LongROX from "../../../assets/LongROX.jpg";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Fade } from "@material-ui/core";
import SEO from "../../../utils/SEO";

export default function BreadproofingBaskets(props) {
  const { t } = useTranslation("common");

  const basketTypes = {
    roundBreadProofing: {
      title: "",
      imageTypeRO: null,
      imageTypeROX: null,
    },
  };

  const RoundBasketRows = [
    createData("250 g / 0,55 lb", '⌀ 18 cm / 7"', "RO/ROX 3OK0250K"),
    createData("500 g / 1,10 lb", '⌀ 20 cm / 8"', "RO/ROX 3OK0500D"),
    createData("750 g / 1,65 lb", '⌀ 22 cm / 8,5"', "RO/ROX 3OK0750L"),
    createData("1000 g / 2,20 lb", '⌀ 23,5 cm / 9,2"', "RO/ROX 3OK1000U"),
    createData("1250 g / 2,75 lb", '⌀ 25 cm / 9,8"', "RO/ROX 3OK1250P"),
    createData("1500 g / 3,30 lb", '⌀ 26 cm / 10,2"', "RO/ROX 3OK1500Y"),
    createData("1750 g / 3,85 lb", '⌀ 27,5 cm / 10,8"', "RO/ROX 3OK1750H"),
    createData("2000 g / 4,40 lb", '⌀ 29 cm / 11,5"', "RO/ROX 3OK2000B"),
    createData("2500 g / 5,50 lb", '⌀ 30,5 cm / 12"', "RO/ROX 3OK2500M"),
    createData("3000 g / 6,60 lb", '⌀ 32 cm / 12,6"', "RO/ROX 3OK3000C"),
    createData("5000 g / 11,00 lb", '⌀ 42 cm / 16,5"', "RO/ROX 3OK5000V"),
  ];

  const OblongBasketRows = [
    createData("250 g / 0,55 lb", '23 x 14 cm / 9 x 5,5"', "LO/LOX 2PO0250K"),
    createData("500 g / 1,10 lb", '24 x 14 cm / 9,5 x 5,5"', "LO/LOX 2PO0500D"),
    createData(
      "600 g / 1,30 lb",
      '26 x 14 cm / 10,2 x 5,5"',
      "LO/LOX 2PO0600W"
    ),
    createData("750 g / 1,65 lb", '28 x 15 cm / 11 x 6"', "LO/LOX 2PO0750J"),
    createData("800 g / 1,80 lb ", '29 x 15 cm / 11,5 x 6"', "LO/LOX 2PO0800L"),
    createData(
      "1000 g / 2,20 lb",
      '34 x 16 cm / 13,4 x 6,3" ',
      "LO/LOX 2PO1000T"
    ),
    createData("1250 g / 2,75 lb", '38 x 16 cm / 15 x 6,3"', "LO/LOX 2PO1250Q"),
    createData(
      "1500 g / 3,30 lb",
      '39 x 17 cm / 15,3 x 6,9"',
      "LO/LOX 2PO1500E"
    ),
    createData(
      "1750 g / 3,85 lb",
      '44 x 16 cm / 17,3 x 6,3"',
      "LO/LOX 2PO1750H"
    ),
    createData(
      "2000 g / 4,40 lb",
      '46 x 16 cm / 18,1 x 6,3"',
      "LO/LOX 2PO2000B"
    ),
    createData(
      "2500 g / 5,50 lb",
      '49 x 17 cm / 19,3 x 6,7"',
      "LO/LOX 2PO2500M"
    ),
  ];

  const OvalBasketRows = [
    createData("250 g / 0,55 lb", '21 x 15 cm / 8,2 x 6"', "OV/OVX 9OW0250K"),
    createData("500 g / 1,10 lb", '23 x 15 cm / 9 x 6"', "OV/OVX 9OW0500D"),
    createData("500 g / 1,10 lb", '24 x 16 cm / 9,5 x 6,3"', "OV/OVX 9OW0500W"),
    createData(
      "750 g / 1,65 lb",
      '27 x 17 cm / 10,6 x 6,7"',
      "OV/OVX 9OW0750J"
    ),
    createData(
      "1000 g / 2,20 lb",
      '30 x 17 cm / 11,8 x 6,7"',
      "OV/OVX 9OW1000U"
    ),
    createData("1250 g / 2,75 lb", '32 x 20 cm / 12,6 x 8"', "OV/OVX 9OW1250Q"),
    createData("1500 g / 3,30 lb", '34 x 20 cm / 13,4 x 8"', "OV/OVX 9OW1500E"),
    createData("2000 g / 4,40 lb", '38 x 22 cm / 15 x 8,5"', "OV/OVX 9OW2000G"),
  ];

  const BaguetteBasketRows = [
    createData("250 g / 0,55 lb", '40 x 10 cm / 15,7 x 4"', "BG/BGX 4BA0250W"),
    createData(
      "500 g / 1,10 lb",
      '40 x 12 cm / 15,7 x 4,7"',
      "BG/BGX 4BA0500L"
    ),
    createData("500 g / 1,10 lb", '46 x 10 cm / 18,1 x 4"', "BG/BGX 4BA0500U"),
    createData("750 g / 1,65 lb", '60 x 10 cm / 23,6 x 4"', "BG/BGX 4BA0750F"),
    createData(
      "1000 g / 2,20 lb",
      '46 x 12 cm / 18,1 x 4,7"',
      "BG/BGX 4BA1000T"
    ),
  ];

  const MiniBasketRows = [
    createData(
      "50 g / 0,11 lb ",
      '⌀ 11 x 6 h cm / ⌀ 4,3 x 2,4h"',
      "RO 1MOK050L"
    ),
    createData(
      "50 g / 0,11 lb ",
      '16,5 x 8,5 x 6 cm / 6,5 x 3,3 x 2,4"',
      "LO 1MPO050K"
    ),
    createData(
      "100 g / 0,22 lb",
      '⌀ 13,5 x 6 h cm / ⌀ 5,3 x 2,4 h"',
      "RO 8MOK100R"
    ),
    createData(
      "100 g / 0,22 lb",
      '18 x 10 x 6 cm / 7 x 4 x 2,4"',
      "LO 1MPO100A"
    ),
    createData(
      "150 g / 0,33 lb",
      '⌀ 15 x 6 h cm / ⌀ 5,9 x 2,4 h"',
      "RO 8MOK150P"
    ),
  ];

  const SquareBasketRows = [
    createData("500 g / 1,10 lb", '20 x 20 cm / 8 x 8" ', "SQ/SQX 6KW0500W"),
    createData("1000 g / 2,20 lb", '23 x 23 cm / 9 x 9"', "SQ/SQX 6KW1000T"),
    createData("1500 g / 3,30 lb", '25 x 25 cm / 9,8 x 9,8"', "SQX 6KW1500E"),
    createData("2000 g / 4,40 lb", '27 x 27 cm / 10,6 x 10,6"', "SQX 6KW2000G"),
  ];

  const LongBasketRows = [
    createData("3000 g / 6,6 lb", '50 x 18 cm / 19,7 x 7"', "SLX 6KR3000W"),
    createData("4000 g / 8,8 lb", '60 x 18 cm / 23,6 x 7"', "SLX 6KR4000T"),
    createData("5000 g / 11,0 lb", '70 x 18 cm / 27,5 x 7"', "SLX 6KR5000E"),
    createData("6000 g / 13,2 lb", '79 x 18 cm / 31,1 x 7"', "SLX 6KR6000G"),
    createData("7000 g / 15,4 lb", '88 x 18 cm / 34,6 x 7" ', "SLX 6KR7000G"),
  ];

  let tableRows = [];
  switch (props.title) {
    case "RoundBaskets":
      basketTypes.roundBreadProofing.title = t("productDetails.roundBaskets");
      basketTypes.imageTypeRO = RoundROImage;
      basketTypes.imageTypeROX = RoundROXImage;
      tableRows = RoundBasketRows;
      break;
    case "OblongBaskets":
      basketTypes.roundBreadProofing.title = t("productDetails.oblongBaskets");
      tableRows = OblongBasketRows;
      basketTypes.imageTypeRO = OblongRO;
      basketTypes.imageTypeROX = OblongROX;
      break;
    case "OvalBaskets":
      basketTypes.roundBreadProofing.title = t("productDetails.ovalBaskets");
      tableRows = OvalBasketRows;
      basketTypes.imageTypeRO = OvalRO;
      basketTypes.imageTypeROX = OvalROX;
      break;
    case "BaguetteBaskets":
      basketTypes.roundBreadProofing.title = t(
        "productDetails.baguetteBaskets"
      );
      tableRows = BaguetteBasketRows;
      basketTypes.imageTypeRO = BaguetteRO;
      basketTypes.imageTypeROX = BaguetteROX;
      break;
    case "MiniBaskets":
      basketTypes.roundBreadProofing.title = t("productDetails.miniBaskets");
      tableRows = MiniBasketRows;
      basketTypes.imageTypeRO = MiniRO;
      basketTypes.imageTypeROX = null;
      break;
    case "SquareBaskets":
      basketTypes.roundBreadProofing.title = t("productDetails.squareBaskets");
      tableRows = SquareBasketRows;
      basketTypes.imageTypeRO = null;
      basketTypes.imageTypeROX = SquareROX;
      break;
    case "LongBaskets":
      basketTypes.roundBreadProofing.title = t("productDetails.bigBaskets");
      tableRows = LongBasketRows;
      basketTypes.imageTypeRO = null;
      basketTypes.imageTypeROX = LongROX;
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
        <SEO title={props.title} />
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
                  {t("productDetails.type")} RO
                </h3>
                <DividerLine height="2px" width="12%" color="rgb(255,195,11)" />
                <p>{t("productDetails.entirelyRattan")}</p>
                <img
                  className={classes.typeImage}
                  src={basketTypes.imageTypeRO}
                  alt="Rattan round basket"
                />
              </div>
              <div
                className={classes.type}
                style={!basketTypes.imageTypeROX ? { display: "none" } : {}}
              >
                <h3 className={classes.typeTitle}>
                  {t("productDetails.type")} ROX
                </h3>
                <DividerLine height="2px" width="12%" color="rgb(255,195,11)" />
                <p>{t("productDetails.woodBase")}</p>

                <img
                  className={classes.typeImage}
                  src={basketTypes.imageTypeROX}
                  alt="Rattan round basket with wooden base"
                />
              </div>
            </div>
            {props.title === "RoundBaskets" ||
            props.title === "OblongBaskets" ||
            props.title === "OvalBaskets" ? (
              <p className={classes.linersAvailable}>
                <CheckCircleOutlineIcon
                  style={{ color: "green", marginRight: 8 }}
                />
                {`${t("productDetails.linersAvailable")} ${
                  props.title === "RoundBaskets"
                    ? "250g ➥ 1500g."
                    : props.title === "OblongBaskets"
                    ? "250g ➥ 1750g."
                    : props.title === "OvalBaskets"
                    ? "250g ➥ 1000g."
                    : null
                }`}
              </p>
            ) : null}

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
            <div className={classes.productInfo}>
              <h2 className={classes.productTitle}>{t("productInfo.title")}</h2>
              <div className={classes.productInfoFlex}>
                <ul className={classes.productInfoList}>
                  <li>
                    <strong>{t("productInfo.line1")}</strong>
                  </li>
                  <li>{t("productInfo.line2")}</li>
                  <li>
                    <strong>{t("productInfo.line3")}</strong>
                  </li>
                  <li>{t("productInfo.line4")}</li>
                  <li>
                    <strong>{t("productInfo.line5")}</strong>
                  </li>
                  <li>
                    <strong>{t("productInfo.line6")}</strong>
                  </li>
                  <li>
                    <strong>{t("productInfo.line7")}</strong>
                    <ol>
                      <li>{t("productInfo.line71")}</li>
                      <li>{t("productInfo.line72")}</li>
                    </ol>
                  </li>
                  <li>{t("productInfo.line8")}</li>
                  <li>{t("productInfo.line9")}</li>
                  <li>{t("productInfo.line10")}</li>
                  <li>
                    <strong>{t("productInfo.line11")}</strong>
                  </li>
                </ul>
                <div className={classes.basketCerContainer}>
                  <img
                    className={classes.basketsCertImage}
                    src={BasketsCertificationImage}
                    alt="Baskets with Certificates"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.side}>
            <NeedHelpSection />
          </div>
        </div>
      </div>
    </Fade>
  );
}
