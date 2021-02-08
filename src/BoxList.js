import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const initialBoxes = [
    { width: 30, height: 30, color: "red" },
    { width: 40, height: 40, color: "blue" },
    { width: 50, height: 50, color: "black" },
  ];

  const [boxes, setBoxes] = useState(initialBoxes);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox }]);
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
