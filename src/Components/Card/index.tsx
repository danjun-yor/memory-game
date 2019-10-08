import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { tCard } from "../Deck";

interface Props {
  card: tCard;
  handleCardClick: (i: number) => void;
}

interface State {}

export default class Card extends Component<Props, State> {
  getClassName() {
    const { isFlipping, isOpened, shouldShow } = this.props.card;

    return `card x2 ${isFlipping ? (isOpened ? "reverse-flip" : "flip") : ""} ${
      shouldShow ? "show open" : ""
    }`;
  }

  render() {
    const { card, handleCardClick } = this.props;

    return (
      <li
        className={this.getClassName()}
        onClick={() => handleCardClick(card.id)}
      >
        <FontAwesomeIcon icon={card.card} />
      </li>
    );
  }
}
