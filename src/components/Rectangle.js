import React from 'react';
import { Rect } from 'react-konva';

const Rectangle = ({ x, y, width, height, fill }) => {
  return <Rect x={x} y={y} width={width} height={height} fill={fill} />;
};

export default Rectangle;
