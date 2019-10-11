import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tCard } from "../Deck";

interface Props {
  size: number;
  card: tCard;
  handleCardClick: (i: number) => void;
}

interface State {}

export default class Card extends Component<Props, State> {
  getClassName() {
    const {
      size,
      card: { isFlipping, isOpened, shouldShow, card }
    } = this.props;

    return `card x${size} ${
      isFlipping ? (isOpened ? "reverse-flip" : "flip") : ""
    } ${shouldShow || !card ? "show open" : ""} ${!card ? "disabled" : ""}`;
  }

  render() {
    const { card, handleCardClick } = this.props;

    return (
      <li
        className={this.getClassName()}
        onClick={() => handleCardClick(card.id)}
      >
        {card["card"] ? <FontAwesomeIcon icon={card.card} /> : ""}
      </li>
    );
  }
}
