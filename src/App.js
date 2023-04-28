import "./App.css";
import ListWords from "./components/listWords/ListWords";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FlippingCards from "./components/flippingCards/FlippingCards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            <Route path="/game" element={<FlippingCards index={0} />} />
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

function NoMatch() {
  return <h2>404 Page Not Found</h2>;
}
