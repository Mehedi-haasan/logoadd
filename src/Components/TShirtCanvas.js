import React, { useRef, useState } from 'react';
import { Stage, Layer, Image as KonvaImage, Transformer } from 'react-konva';

const TShirtCanvas = ({ tshirtImage, logoImage, stageRef }) => {
  const [logoPosition, setLogoPosition] = useState({ x: 50, y: 50 });
  const logoRef = useRef(null);
  const transformerRef = useRef(null);


  const handleSelect = () => {
    transformerRef.current.nodes([logoRef.current]);
    transformerRef.current.getLayer().batchDraw();
  };

  const handleDisSelect = () => {
    transformerRef.current.nodes([]);
    transformerRef.current.getLayer().batchDraw();
  };

  return (
    <Stage width={500} height={500} ref={stageRef}>
      <Layer>
        {tshirtImage && (
          <KonvaImage
            image={tshirtImage}
            x={0}
            y={0}
            width={500}
            height={500}
            onClick={handleDisSelect}
          />
        )}


        {logoImage && (
          <KonvaImage
            image={logoImage}
            x={60}
            y={60}
            width={200}
            height={200}
            draggable
            ref={logoRef}
            onClick={handleSelect}
            onDragEnd={(e) => {
              setLogoPosition({ x: e.target.x(), y: e.target.y() });
            }}
          />
        )}

        {/* Transformer for Resizing */}
        <Transformer ref={transformerRef} />
      </Layer>
    </Stage>
  );
};

export default TShirtCanvas;
