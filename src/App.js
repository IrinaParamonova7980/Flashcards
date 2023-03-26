import data from "./data.json";
import "./App.css";
import ListWords from "./components/listWords/ListWords";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import WordCard from "./components/wordCard/WordCard";


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
      </main>
      <footer>
        <Footer></Footer>
        </footer>
    </div>
  );
}

export default App;
