import React from "react";
import classes from "./LanguageOption.module.css";
import { useTranslation } from "react-i18next";
import { Link, withRouter } from 'react-router-dom';

function LanguageOption(props) {

  const { i18n } = useTranslation("common");
  const changeLang = () => {
    props.setLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(props.lang);
    }, 200);
  };

  let style = [classes[props.lang], classes.flag];
  
  return (
    <>
    <Link to={`/${props.lang}`}>
      <div className={style.join(" ")} onClick={() => changeLang()}>
      </div>
      </Link>
    </>
  );
}

export default withRouter(LanguageOption)
