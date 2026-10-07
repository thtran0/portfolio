import { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import stars from '../data/stars';

function StarPage() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const star = stars.find((s) => s.slug === slug);

  if (!star) return <p>That star doesn't exist.</p>;

  return (
    <main className="star-page">
      <Link to="/" className="back-link">← Back to the sky</Link>

      <header>
        <svg className="star-hero" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="18" className={`star type-${star.type}`} />
        </svg>
        <h1>{star.title}</h1>
        {star.role && <p className="meta">{star.role} · {star.dates}</p>}
      </header>

      {star.challenge && (
        <section>
          <h2>The challenge</h2>
          <p>{star.challenge}</p>
        </section>
      )}

      {star.whatIDid && (
        <section>
          <h2>What I did</h2>
          {star.whatIDid.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>
      )}

      {star.impact && (
        <section>
          <h2>Impact</h2>
          <p>{star.impact}</p>
        </section>
      )}

      {star.reflection && (
        <section>
          <h2>What I'd tell past me</h2>
          <blockquote>{star.reflection}</blockquote>
        </section>
      )}

      {star.tags && (
        <ul className="tags">
          {star.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default StarPage;