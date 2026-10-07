import { useState } from 'react';
import './App.css';
import Star from './components/Star';
import stars, { links } from './data/stars';

function App() {

  const [hoveredSlug, setHoveredSlug] = useState(null);
  const hoveredStar = stars.find((star) => star.slug === hoveredSlug);
  const activeConstellations = hoveredStar?.constellations ?? [];

  function isDimmed(star) {
    if (hoveredSlug === null) return false;

    const sharesOne = star.constellations.some((c) => activeConstellations.includes(c));
    return !sharesOne;
  }

  return (
    <div>
      <h1>Theresa Tran</h1>
      <p>Where design, code, and community meet.</p>
      <svg viewBox="0 0 800 500">
        {links.map(([from, to]) => {
          const fromStar = stars.find((star) => star.slug === from);
          const toStar = stars.find((star) => star.slug === to);

          return (
            <line
              key={`${from}-${to}`}
              className={isDimmed(fromStar) || isDimmed(toStar) ? "link dimmed" : "link"}
              x1={fromStar.x}
              y1={fromStar.y}
              x2={toStar.x}
              y2={toStar.y}
            />
          );
        })}    

        {stars.map((star)=> (
          <Star 
            key={star.slug} 
            x={star.x} 
            y={star.y} 
            size={star.size} 
            onHover={() => setHoveredSlug(star.slug)}
            onLeave={() => setHoveredSlug(null)}
            isHovered={hoveredSlug === star.slug}
            isDimmed={isDimmed(star)}
          />
        ))}
      </svg>
    </div>

  )
}

export default App
