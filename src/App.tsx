import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Signup from './page/Signup';
import Article from './page/Article';
import SearchResults from './page/SearchResults';
import Politics from './page/Politics';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/article" element={<Article />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="*" element={<div className="p-10 text-center text-gray-600">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
