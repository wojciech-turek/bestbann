import React from "react";
import loader from "../../assets/videos/200w.gif";

export default function Loader({ width, height }) {
  return (
    <div>
      <img src={loader} style={{ width: width, height: height }} alt="" />
    </div>
  );
}
