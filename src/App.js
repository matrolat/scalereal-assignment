import logo from './logo.svg';
import { Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
