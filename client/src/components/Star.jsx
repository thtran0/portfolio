import { useState } from "react";


function Star({ x, y, size }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <circle
      className="star"
      cx={x}
      cy={y}
      r={isHovered ? size * 1.5 : size}
      fill="white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

 export default Star;