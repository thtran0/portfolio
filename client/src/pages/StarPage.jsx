import { useParams, Link } from 'react-router';
import stars from '../data/stars';

function StarPage() {
  const { slug } = useParams();
  const star = stars.find((s) => s.slug === slug);

  if (!star) return <p>That star doesn't exist.</p>;

  return (
    <main>
      <Link to="/">← Back to the sky</Link>
      <h1>{star.title}</h1>
      <p>{star.type}</p>
    </main>
  );
}

export default StarPage;