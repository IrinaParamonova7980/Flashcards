import "./wordCard.scss";

function WordCard(props) {
  return (
    <div className="card">
      <h2 className="word">{props.english}</h2>
      <div className="transcription">{props.transcription}</div>
      <h2 className="word">{props.russian}</h2>
      <div className="topic">{props.tags}</div>
    </div>
  );
}

export default WordCard;
