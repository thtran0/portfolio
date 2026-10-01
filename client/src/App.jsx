import './App.css';
import Star from './components/Star';
import stars, { links } from './data/stars';

function App() {

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
              className="link"
              x1={fromStar.x}
              y1={fromStar.y}
              x2={toStar.x}
              y2={toStar.y}
            />
          );
        })}    

        {stars.map((star)=> (
          <Star key={star.slug} x={star.x} y={star.y} size={star.size} />
        ))}
      </svg>
    </div>

  )
}

export default App
