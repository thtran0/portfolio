import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import StarPage from './pages/StarPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:slug" element={<StarPage />} />
    </Routes>
  );
}

export default App;