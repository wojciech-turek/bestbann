import React from "react";
import classes from "./LanguageOption.module.css";
import { useTranslation } from "react-i18next";

export default function LanguageOption(props) {
  const { i18n } = useTranslation("common");

  let changeLang = () => {
    props.setLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(props.lang);
    }, 200);
  };

  let style = [classes[props.lang], classes.flag];
  return (
    <>
      <div className={style.join(" ")} onClick={() => changeLang()}></div>
    </>
  );
}
