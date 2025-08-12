import './css/App.css';
import Home from './pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites.jsx';
import Navbar from './components/Navbar.jsx';
import { MovieProvider } from './contexts/MovieContext';
import Login from './pages/Login.jsx'; // Assuming you have a Login component


function App() {


  return (
    <MovieProvider>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={< Favorites />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}


export default App;




