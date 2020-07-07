import React from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import { useTranslation } from "react-i18next";
export default function MainPage() {
  const { t } = useTranslation("common");
  return (
    <div>
      <HeroBanner />
      <h1>{t("title")}</h1>
    </div>
  );
}
