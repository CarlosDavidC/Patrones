import React from 'react';
import { Line } from 'react-konva';

const Triangle = ({ x, y, side1, side2, side3, fill }) => {
  // Calculate the coordinates of the triangle vertices
  const A = { x: 0, y: 0 };
  const B = { x: side1, y: 0 };

  // Using the law of cosines to find the coordinates of point C
  const angleC = Math.acos(
    (Math.pow(side1, 2) + Math.pow(side2, 2) - Math.pow(side3, 2)) / (2 * side1 * side2)
  );
  const C = { x: side2 * Math.cos(angleC), y: side2 * Math.sin(angleC) };

  // Offset to center the triangle
  const offsetX = x - (A.x + B.x + C.x) / 3;
  const offsetY = y - (A.y + B.y + C.y) / 3;

  const points = [
    A.x + offsetX, A.y + offsetY,
    B.x + offsetX, B.y + offsetY,
    C.x + offsetX, C.y + offsetY
  ];

  return <Line points={points} closed fill={fill} stroke="black" />;
};

export default Triangle;
