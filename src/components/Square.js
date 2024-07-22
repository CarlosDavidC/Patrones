import React from 'react';
import { Rect } from 'react-konva';

const Square = ({ x, y, size, fill }) => {
  return <Rect x={x} y={y} width={size} height={size} fill={fill} />;
};

export default Square;
