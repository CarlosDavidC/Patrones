import React from 'react';
import { Circle as KonvaCircle } from 'react-konva';

const Circle = ({ x, y, radius, fill }) => {
  return <KonvaCircle x={x} y={y} radius={radius} fill={fill} />;
};

export default Circle;
