import './App.css';
import { Navbar } from './Navbar/navbar';
import { Banner } from './Banner/banner';  // ✅ Import nombrado correcto
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* ✅ Las rutas deben ir dentro de <Route> */}
          <Route path="/" element={<Banner />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
