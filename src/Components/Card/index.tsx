import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tCard } from "../Deck";
import "./styles.scss";

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
      card: { isFlipping, isOpened, isChecked, shouldShow, card }
    } = this.props;

    return `card x${size} ${
      isFlipping ? (isOpened ? "reverse-flip" : "flip") : ""
    }${shouldShow || !card ? " show open" : ""}${!card ? " disabled" : ""}${
      isChecked ? " checked" : ""
    }`;
  }

  render() {
    const { card, handleCardClick } = this.props;

    return (
      <li
        className={this.getClassName()}
        onClick={(e: React.MouseEvent) => {
          // const target = e.target as HTMLElement;
          handleCardClick(card.id);
        }}
      >
        {card["card"] ? <FontAwesomeIcon icon={card.card} /> : ""}
      </li>
    );
  }
}
