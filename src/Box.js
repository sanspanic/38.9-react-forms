import React, { useState } from "react";

const Box = ({ id, width, height, color, removeBox }) => {
  const handleRemove = () => {
    removeBox(id);
  };

  return (
    <>
      <div
        id={id}
        style={{
          backgroundColor: color,
          height: `${height}px`,
          width: `${width}px`,
        }}
      ></div>
      <button onClick={handleRemove}>X</button>
    </>
  );
};

export default Box;
