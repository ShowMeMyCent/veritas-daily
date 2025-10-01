import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Article from './pages/Article';
import CMS from './pages/CMS';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/article" element={<Article />} />
        <Route path="/cms" element={<CMS />} />
        <Route path="/admin" element={<Admin />} />
        {/* Add more routes here */}
        <Route path="*" element={<div className="p-10 text-center text-gray-600">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
