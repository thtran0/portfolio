function Star({ x, y, size, isHovered, isDimmed, onHover, onLeave }) {
  return (
    <circle
      className={isDimmed ? "star dimmed" : "star"}
      cx={x}
      cy={y}
      r={isHovered ? size * 1.5 : size}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    />
  );
}

export default Star;