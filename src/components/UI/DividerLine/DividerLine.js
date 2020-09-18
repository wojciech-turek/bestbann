import React from "react";

export default function DividerLine(props) {
  return (
    <div
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.color,
      }}
    ></div>
  );
}
