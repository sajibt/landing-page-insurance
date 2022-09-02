import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./modules/home/Home";
import "./scss/main.scss";
function App() {
  return (
    <div className="App">
      {/* <h1> i love you mow</h1> */}
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
