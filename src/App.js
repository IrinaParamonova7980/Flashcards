import data from "./data.json";
import "./App.css";
import ListWords from "./components/listWords/ListWords";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import WordCard from "./components/wordCard/WordCard";
import WordcardTranslation from "./components/wordcardTranslation/WordcardTranslation";

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <main>
        <section>
          <ListWords newWord={true}></ListWords>
        </section>
        <div>
          {data.map((data) => (
            <WordCard
              english={data.english}
              transcription={data.transcription}
              russian={data.russian}
              tags={data.tags}
              key={data.id}
            ></WordCard>
          ))}
        </div>
        {/* <div>
          {data.map((data) => (
            <WordcardTranslation
              russian={data.russian}
              key={data.id}
            ></WordcardTranslation>
          ))}
        </div> */}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
