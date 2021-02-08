import React, { useState } from "react";

const Box = ({ width, height, color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: `${height}px`,
        width: `${width}px`,
      }}
    ></div>
  );
};

export default Box;
