function Star({ x, y, size, type, title, isHovered, isDimmed, onHover, onLeave, onSelect }) {
  const className = `star type-${type}${isDimmed ? " dimmed" : ""}`;

  function handleKeyDown(event) {
     if (event.key === "Enter" || event.key === " ") {
       event.preventDefault();
       onSelect();
     }
   }

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
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      role="link"
    />
  );
}

export default Star;