import React from "react";
import DividerLine from "../../../components/UI/DividerLine/DividerLine";
import classes from "./BreadproofingBaskets.module.css";
import RoundROImage from "../../../assets/RoundRO.png";
import RoundROXImage from "../../../assets/RoundROX.png";
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

export default function BreadproofingBaskets(props) {
  const { t } = useTranslation("common");
  const basketTypes = {
    roundBreadProofing: {
      title: "Round bread proofing baskets",
      imageTypeRO: RoundROImage,
      imageTypeROX: RoundROXImage,
    },
  };

  const columns = [
    { id: "weight", label: "DOUGH WEIGHT IN G / LB", minWidth: 60 },
    { id: "size", label: "EXTERNAL MEASURES IN CM / INCHES ", minWidth: 60 },
    {
      id: "catalog",
      label: "CATALOG NUMBER",
      minWidth: 100,
    },
  ];

  function createData(weight, size, catalog) {
    return { weight, size, catalog };
  }

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

  return (
    <div className={classes.Container}>
      <div className={classes.wrapper}>
        <div className={classes.productDetails}>
          <h1 className={classes.productTitle}>
            {basketTypes.roundBreadProofing.title}
          </h1>
          <DividerLine height="3px" width="10%" color="darkred" />
          <div className={classes.basketTypes}>
            <div className={classes.type}>
              <h3 className={classes.typeTitle}>Type RO</h3>
              <DividerLine height="2px" width="12%" color="rgb(255,195,11)" />
              <p>Entirely made out of natural rattan</p>
              <img
                className={classes.typeImage}
                src={RoundROImage}
                alt="Rattan round basket"
              />
            </div>
            <div className={classes.type}>
              <h3 className={classes.typeTitle}>Type ROX</h3>
              <DividerLine height="2px" width="12%" color="rgb(255,195,11)" />
              <p>Made out of natural rattan and wood</p>

              <img
                className={classes.typeImage}
                src={RoundROXImage}
                alt="Rattan round basket with wooden base"
              />
            </div>
          </div>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {RoundBasketRows.map((row) => {
                    return (
                      <TableRow hover key={row.catalogNumber}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
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
            <h2 className={classes.productTitle}>Product Info</h2>
            <div className={classes.productInfoFlex}>
              <ul className={classes.productInfoList}>
                <li>{t("productInfo.line1")}</li>
                <li>{t("productInfo.line2")}</li>
                <li>
                  <strong>{t("productInfo.line3")}</strong>
                </li>
                <li>{t("productInfo.line4")}</li>
                <li>{t("productInfo.line5")}</li>
                <li>
                  <strong>{t("productInfo.line6")}</strong>
                </li>
                <li>{t("productInfo.line7")}</li>
                <li>{t("productInfo.line8")}</li>
                <li>
                  <strong>{t("productInfo.line9")}</strong>
                  <ol>
                    <li>{t("productInfo.line91")}</li>
                    <li>{t("productInfo.line92")}</li>
                  </ol>
                </li>
                <li>{t("productInfo.line10")}</li>
                <li>{t("productInfo.line11")}</li>
                <li>{t("productInfo.line12")}</li>
                <li>{t("productInfo.line13")}</li>
                <li>
                  <strong>{t("productInfo.line14")}</strong>
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
  );
}
