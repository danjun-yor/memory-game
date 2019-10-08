import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  card: IconDefinition;
  setCount: (number: number) => void;
}

interface State {
  isOpened: boolean;
  isFlipping: boolean;
  shouldShow: boolean;
}

export default class Card extends Component<Props, State> {
  state = {
    isOpened: false,
    isFlipping: false,
    shouldShow: false
  };

  doFlip() {
    this.setState({
      isFlipping: true
    });
  }

  finishFlip() {
    this.setState({
      isOpened: !this.state.isOpened,
      isFlipping: false
    });
  }

  handleCardClick(e: React.MouseEvent<HTMLLIElement>) {
    const { isOpened, isFlipping } = this.state;

    if (isFlipping) {
      return;
    }

    this.doFlip();
    setTimeout(() => {
      setTimeout(() => {
        this.finishFlip();
      }, 500);
      this.setState({
        shouldShow: isOpened ? false : true
      });
    }, 500);
  }

  getClassName() {
    const { isFlipping, isOpened, shouldShow } = this.state;

    return `card x2 ${isFlipping ? (isOpened ? "reverse-flip" : "flip") : ""} ${
      shouldShow ? "show open" : ""
    }`;
  }

  render() {
    const { card } = this.props;
    const { isFlipping, isOpened } = this.state;

    return (
      <li
        className={this.getClassName()}
        onClick={this.handleCardClick.bind(this)}
      >
        <FontAwesomeIcon icon={card} />
      </li>
    );
  }
}
