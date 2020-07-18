import React from "react";
import classes from "./LanguageOption.module.css";
import { useTranslation } from "react-i18next";

export default function LanguageOption(props) {
  const { i18n } = useTranslation("common");

  let changeLang = () => {
    i18n.changeLanguage(props.lang);
  };

  let style = [classes[props.lang], classes.flag];
  return (
    <>
      <div className={style.join(" ")} onClick={() => changeLang()}></div>
    </>
  );
}
