import React from 'react';
import { Stage, Layer } from 'react-konva';
import Triangle from './Triangle';
import Rectangle from './Rectangle';
import Square from './Square';
import Circle from './Circle';
import Ruler from './Ruler';

const Canvas = ({ figure, figureData }) => {
  const width = window.innerWidth * 0.8;
  const height = window.innerHeight * 0.8;
  const offsetX = (window.innerWidth - width) / 2;
  const offsetY = (window.innerHeight - height) / 2;

  const renderFigure = () => {
    switch (figure) {
      case 'triangle':
        return <Triangle x={width / 2} y={height / 2} side1={figureData.side1} side2={figureData.side2} side3={figureData.side3} fill="blue" />;
      case 'rectangle':
        return <Rectangle x={width / 2 - figureData.length / 2} y={height / 2 - figureData.height / 2} width={figureData.length} height={figureData.height} fill="green" />;
      case 'square':
        return <Square x={width / 2 - figureData.side / 2} y={height / 2 - figureData.side / 2} size={figureData.side} fill="red" />;
      case 'circle':
        return <Circle x={width / 2} y={height / 2} radius={figureData.radius} fill="yellow" />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Stage width={width} height={height}>
        <Layer>
          <Ruler width={width} height={height} offsetX={offsetX} offsetY={offsetY} />
          {renderFigure()}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
