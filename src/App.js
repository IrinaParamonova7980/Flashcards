import "./App.css";
import { useState, useEffect } from "react";
import ListWords from "./components/listWords/ListWords";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoMatch from "./components/nomatch/NoMatch";
import { WordContext } from "./components/wordsContext/WordContext";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
        throw responce;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Error", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  return (
    <WordContext.Provider value={data}>
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
    </WordContext.Provider>
  );
}
