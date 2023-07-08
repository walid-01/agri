import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Games from "./Pages/Games";
import Game from "./Pages/Game";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/games" exact element={<Games />} />
          <Route path="/games/:cpu" exact element={<Game />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
