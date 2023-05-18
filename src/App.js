import "./App.css";
import ListWords from "./components/listWords/ListWords";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoMatch from "./components/nomatch/NoMatch";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header></Header>
        </header>

        <main>
          <Routes>
            <Route exact path="/" element={<ListWords />} />
            <Route path="/game" element={<Carousel index={0} />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  );
}
