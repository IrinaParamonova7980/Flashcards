import React from "react";
import styles from "./flippingCards.module.scss";
import WordCart from "../wordCard/WordCard";

export default class FlippingCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.previousCard = this.previousCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
  }

  previousCard = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  nextCard = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    //const { id, ...itemProps } = this.props.englishCards[this.state.count];
    return (
      <div className={styles.container}>
        <button onClick={this.previousCard} className={styles.button}>
          Назад
        </button>
        <WordCart></WordCart>
        <button onClick={this.nextCard} className={styles.button}>
          Вперед
        </button>
      </div>
    );
  }
}

//key={id} {...itemProps}
