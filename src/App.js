import "./App.css";
import { useState, useEffect } from "react";
import ListWords from "./components/listWords/ListWords";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Error from "./components/error/Error";
import Carousel from "./components/carousel/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoMatch from "./components/nomatch/NoMatch";
import { WordContext } from "./components/wordsContext/WordContext";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words1")
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
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <p>
        <Error></Error>
      </p>
    );
  }

  return (
    <Router>
      <div className="App">
        <header>
          <Header></Header>
        </header>
        <WordContext.Provider value={{ data }}>
          <main>
            <Routes>
              <Route exact path="/" element={<ListWords />} />
              <Route path="/game" element={<Carousel index={0} />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </main>
        </WordContext.Provider>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  );
}
