import "./App.css";
import WordCard from "./components/WordCard/WordCard";
import "./components/WordCard/WordCard.css";

const words = [
  {
    meaning: "Work",
    transcription: "[wɜːk]",
    translation: "Работа",
    topic: "business",
    url: "https://stihi.ru/pics/2018/12/25/8541.jpg",
  },
  {
    meaning: "Profit",
    transcription: "[ˈprɒfɪt]",
    translation: "Прибыль",
    topic: "business",
    url: "https://static.tildacdn.com/tild3633-3638-4266-a265-313266623261/chto-eto-takoe-priby.jpg",
  },
];

function App() {
  return (
    <div className="App">
      {words.map((word) => (
        <WordCard
          meaning={word.meaning}
          transcription={word.transcription}
          translation={word.translation}
          topic={word.topic}
          url={word.url}
        ></WordCard>
      ))}
    </div>
  );
}

export default App;
