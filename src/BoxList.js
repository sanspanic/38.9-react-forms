import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const initialBoxes = [
    { width: 30, height: 30, color: "red", id: uuid() },
    { width: 40, height: 40, color: "blue", id: uuid() },
    { width: 50, height: 50, color: "black", id: uuid() },
  ];

  const [boxes, setBoxes] = useState(initialBoxes);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };

  return (
    <>
      <div>
        {boxes.map(({ width, height, color }) => (
          <Box width={width} height={height} color={color} />
        ))}
      </div>
      <NewBoxForm addBox={addBox} />
    </>
  );
};

export default BoxList;
