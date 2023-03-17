import "./WordCard.css";

function WordCard(props) {
  return (
    <div className="card">
      <h2 className="word">{props.meaning}</h2>
      <div className="transcription">{props.transcription}</div>
      <h2 className="word">{props.translation}</h2>
      <img src={props.url} className="image"></img>
      <div className="topic">{props.topic}</div>
    </div>
  );
}

export default WordCard;
