import React, { useEffect, useState, useRef } from "react";
import avatar2 from "../../../assets/tanmay.jpg";
import avatar3 from "../../../assets/ARCHANA-KRISHNA.png";
import avatar1 from "../../../assets/ANUJA-SINGH.png";
import avatar4 from "../../../assets/YATRA-VISHWAKARMA.png";
import avatar5 from "../../../assets/HARSHITA-BHAMBHANI.png";

const nodes = [
  { id: 1, x: 100, y: 100, size: 100, image: avatar1 },
  { id: 2, x: 250, y: 80, size: 100, image: avatar2 },
  { id: 3, x: 400, y: 100, size: 100, image: avatar3 },
  { id: 4, x: 550, y: 80, size: 100, image: avatar4 },
  { id: 5, x: 700, y: 100, size: 100, image: avatar5 },
  { id: 6, x: 150, y: 250, size: 60, image: avatar1 },
  { id: 7, x: 300, y: 200, size: 60, image: avatar2 },
  { id: 8, x: 450, y: 250, size: 60, image: avatar3 },
  { id: 9, x: 600, y: 200, size: 60, image: avatar4 },
  { id: 10, x: 750, y: 250, size: 60, image: avatar5 },
  { id: 11, x: 50, y: 350, size: 60, image: avatar1 },
  { id: 12, x: 200, y: 400, size: 100, image: avatar2 },
  { id: 13, x: 350, y: 350, size: 60, image: avatar3 },
  { id: 14, x: 500, y: 400, size: 60, image: avatar4 },
  { id: 15, x: 650, y: 350, size: 60, image: avatar5 },
  { id: 16, x: 800, y: 400, size: 60, image: avatar1 },
  { id: 17, x: 900, y: 150, size: 100, image: avatar2 },
  { id: 18, x: 1000, y: 100, size: 60, image: avatar3 },
  { id: 19, x: 1050, y: 300, size: 60, image: avatar4 },
  { id: 20, x: 950, y: 450, size: 60, image: avatar5 },
  { id: 21, x: 850, y: 300, size: 100, image: avatar1 },
];

const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 1, to: 6 },
  { from: 2, to: 7 },
  { from: 3, to: 8 },
  { from: 4, to: 9 },
  { from: 5, to: 10 },
  { from: 6, to: 11 },
  { from: 7, to: 12 },
  { from: 8, to: 13 },
  { from: 9, to: 14 },
  { from: 10, to: 15 },
  { from: 11, to: 12 },
  { from: 12, to: 14 },
  { from: 14, to: 16 },
  { from: 5, to: 17 },
  { from: 17, to: 18 },
  { from: 18, to: 19 },
  { from: 19, to: 20 },
  { from: 17, to: 21 },
];

const Diagram = () => {
  const svgRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPan({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newPan = {
      x: e.clientX - startPan.x,
      y: pan.y, // Keep y-axis pan constant
    };
    setPan(newPan);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const svg = svgRef.current;
    svg.addEventListener("mousedown", handleMouseDown);
    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseup", handleMouseUp);
    svg.addEventListener("mouseleave", handleMouseUp);

    return () => {
      svg.removeEventListener("mousedown", handleMouseDown);
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseup", handleMouseUp);
      svg.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [isDragging, startPan]);

  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <div
        className="w-full max-w-[1100px] h-[600px] overflow-x-auto overflow-y-hidden"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}>
        <svg
          ref={svgRef}
          width="1100"
          height="600"
          className=""
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            touchAction: "pan-x",
          }}>
          <g transform={`translate(${pan.x},0)`}>
            {connections.map((conn, index) => {
              const fromNode = nodes.find((node) => node.id === conn.from);
              const toNode = nodes.find((node) => node.id === conn.to);
              return (
                <line
                  key={index}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="black"
                  strokeWidth="2"
                />
              );
            })}
            {nodes.map((node) => (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size / 2}
                  fill={node.size === 100 ? "#D6C2DE" : "#C9BF8A"}
                  stroke="black"
                  strokeWidth="3"
                />
                <clipPath id={`clip-${node.id}`}>
                  <circle cx={node.x} cy={node.y} r={node.size / 2} />
                </clipPath>
                <image
                  href={node.image}
                  x={node.x - node.size / 2}
                  y={node.y - node.size / 2}
                  height={node.size}
                  width={node.size}
                  clipPath={`url(#clip-${node.id})`}
                />
              </g>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Diagram;
