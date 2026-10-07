function Star({ x, y, size, type, title, isHovered, isDimmed, onHover, onLeave }) {
  const className = `star type-${type}${isDimmed ? " dimmed" : ""}`;

  return (
    <circle
      className={className}
      cx={x}
      cy={y}
      r={isHovered ? size * 1.5 : size}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      tabIndex={0}
      onFocus={onHover}
      onBlur={onLeave}
      aria-label={title}
    />
  );
}

export default Star;