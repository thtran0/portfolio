import { useState } from 'react';
import '../App.css';
import Star from '../components/Star';
import stars, { links, types } from '../data/stars';
import { useNavigate } from 'react-router';

function Home() {

    const [hoveredSlug, setHoveredSlug] = useState(null);
    const [hoveredType, setHoveredType] = useState(null);
    const navigate = useNavigate(); 
    const hoveredStar = stars.find((star) => star.slug === hoveredSlug);
    const activeConstellations = hoveredStar?.constellations ?? [];

    function isDimmed(star) {
        if (hoveredType !== null) return star.type !== hoveredType;
        if (hoveredSlug === null) return false;

        const sharesOne = star.constellations.some((c) => activeConstellations.includes(c));
        return !sharesOne;
    }

    return (
        <div>
            <header className="hero">
                <h1>Theresa Tran</h1>
                <p className="tagline">Where design, code, and community meet.</p>
                <p className="intro">
                I am a software engineer building accessible, human-centered tools that bring communities closer.
                </p>
                <a href="#sky" className="scroll-cue">explore the sky!</a>
            </header>

            <section id="sky" className="sky" aria-label="Constellation map of my work">
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
                        type={star.type}
                        title={star.title}
                        onSelect={() => navigate(`/work/${star.slug}`)}
                    />
                    ))}

                    {hoveredStar && (
                    <text
                        x={hoveredStar.x}
                        y={hoveredStar.y - 15}
                        className="label"
                    >
                        {hoveredStar.title} · {hoveredStar.type}
                    </text>
                    )}

                </svg>
                <ul className="legend">
                    {types.map((type) => (
                    <li key={type.id}>
                        <button
                        className="legend-item"
                        onMouseEnter={() => setHoveredType(type.id)}
                        onMouseLeave={() => setHoveredType(null)}
                        onFocus={() => setHoveredType(type.id)}
                        onBlur={() => setHoveredType(null)}
                        >
                        <span className={`legend-dot type-${type.id}`}></span>
                        {type.label}
                        </button>
                    </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Home
