import React from 'react';
import { Line, Text } from 'react-konva';

const Ruler = ({ width, height, offsetX, offsetY }) => {
  const cmPerUnit = 50; // 1 cm = 50 units in Konva (adjust as necessary)
  const numMarksX = Math.floor(width / cmPerUnit);
  const numMarksY = Math.floor(height / cmPerUnit);
  
  const linesX = [];
  const textsX = [];
  for (let i = 0; i <= numMarksX; i++) {
    const x = i * cmPerUnit + offsetX;
    linesX.push(<Line key={`x${i}`} points={[x, offsetY, x, offsetY + 10]} stroke="black" />);
    textsX.push(<Text key={`tx${i}`} x={x + 2} y={offsetY + 12} text={`${i}cm`} fontSize={10} />);
  }

  const linesY = [];
  const textsY = [];
  for (let i = 0; i <= numMarksY; i++) {
    const y = i * cmPerUnit + offsetY;
    linesY.push(<Line key={`y${i}`} points={[offsetX, y, offsetX + 10, y]} stroke="black" />);
    textsY.push(<Text key={`ty${i}`} x={offsetX + 12} y={y - 5} text={`${i}cm`} fontSize={10} />);
  }

  return (
    <>
      {linesX}
      {textsX}
      {linesY}
      {textsY}
    </>
  );
};

export default Ruler;
