import data from "./data.json";
import "./App.css";
import ListWords from "./components/listWords/ListWords";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import WordCard from "./components/wordCard/WordCard";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <section>
          {data.map((data, index) => (
            <ListWords
              english={data.english}
              transcription={data.transcription}
              russian={data.russian}
              tags={data.tags}
              key={index}
            ></ListWords>
          ))}
        </section>
        <div>
          {data.map((data, index) => (
            <WordCard
              english={data.english}
              transcription={data.transcription}
              russian={data.russian}
              tags={data.tags}
              key={index}
            ></WordCard>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
