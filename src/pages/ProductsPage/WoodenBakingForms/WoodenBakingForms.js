import React from "react";
import classes from "./WoodenBakingForms.module.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTranslation } from "react-i18next";
import FBM720 from "../../../assets/FBM720.jpg";
import FMC708 from "../../../assets/FMC708.jpg";
import FDC715 from "../../../assets/FDC715.jpg";
import FOD737 from "../../../assets/FOS727FOD737.jpg";
import { Trans } from "react-i18next";
import { Fade } from "@material-ui/core";
export default function WoodenBakingForms() {
  const { t } = useTranslation("common");

  const products = [
    {
      pathToImg: FBM720,
      alt: "Wooden Baking Form",
      data: [createData("14 x 9 x 5 cm", "FBM720")],
    },
    {
      pathToImg: FMC708,
      alt: "Wooden Baking Form",
      data: [createData("20 x 10 x 7 cm", "FMC708")],
    },
    {
      pathToImg: FDC715,
      alt: "Wooden Baking Form",
      data: [createData("25 x 11 x 7,5 cm", "FDC715")],
    },
    {
      pathToImg: FOD737,
      alt: "Wooden Baking Form",
      data: [
        createData("Φ 18 x 5,5 cm", "FOD737"),
        createData("Φ 14 x 4,5 cm", "FOS727"),
      ],
    },
  ];

  const columns = [
    { id: "size", label: t("productDetails.tableMeasuresCM"), minWidth: 60 },
    {
      id: "catalog",
      label: t("productDetails.tableCatalog"),
      minWidth: 60,
    },
  ];
  function createData(size, catalog) {
    return { size, catalog };
  }

  return (
    <Fade in={true} timeout={500}>
      <div className={classes.ContentWrapper}>
        <h1 className={classes.sectionTitle}>
          {t("mainSections.products.woodenBakingForm")}
        </h1>
        <Trans>
          <div className={classes.ParagraphWrap}>
            {t("productsPage.woodenBakingForms.description.paragraph1")}
            {t("productsPage.woodenBakingForms.description.paragraph2")}
          </div>
        </Trans>
        <div className={classes.FlexContainer}>
          {products.map((el) => (
            <div className={classes.itemsFlexContainer} key={el.alt}>
              <img
                src={el.pathToImg}
                alt={el.alt}
                className={classes.basketImage}
              />
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
                      {el.data.map((row) => {
                        return (
                          <TableRow hover key={row.catalog}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align="center">
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
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
