import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Create from './components/Create';
import About from './components/About';
import DetailsBlog from './components/DetailsBlog';

//Creating Routes here with react-router-dom
function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<Create />} />
    <Route path="/about" element={<About />} />
    <Route path="/blogs/:id" element={<DetailsBlog />} />

    </Routes>

</>

  );
}

export default App;
