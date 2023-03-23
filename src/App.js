import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WordCard from "./components/WordCard/WordCard";

const words = [
  {
    id: "13366",
    english: "mama",
    transcription: "[mama]",
    russian: "мама",
    tags: "family",
    tags_json: '["family"]',
  },
  {
    id: "13367",
    english: "dad",
    transcription: "[dæd]",
    russian: "папа",
    tags: "family",
    tags_json: '["family"]',
  },
];

function App() {
  return (
    <div className="App">
      <Header></Header>
      {words.map((word, index) => (
        <WordCard
          english={word.english}
          transcription={word.transcription}
          russian={word.russian}
          tags={word.tags}
          key={index}
        ></WordCard>
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
