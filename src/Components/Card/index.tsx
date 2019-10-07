import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  card: IconDefinition;
}

interface State {
  isOpened: boolean;
  isFlipping: boolean;
}

export default class Card extends Component<Props, State> {
  state = {
    isOpened: false,
    isFlipping: false
  };

  open() {
    this.setState({
      isOpened: true
    });
  }

  close() {
    this.setState({
      isOpened: false
    });
  }

  doFlip(classList: Element["classList"], isReverse = false) {
    if (isReverse) {
      classList.add("reverse-flip");
    } else {
      classList.add("flip");
    }
    this.setState({
      isFlipping: true
    });
  }

  completeFlip(classList: Element["classList"], isReverse = false) {
    if (isReverse) {
      classList.remove("reverse-flip");
    } else {
      classList.remove("flip");
    }
    this.setState({
      isFlipping: false
    });
  }

  handleCardClick(e: React.MouseEvent<HTMLLIElement>) {
    const { isOpened, isFlipping } = this.state;
    const target = e.currentTarget;

    if (isFlipping) {
      return;
    }

    if (isOpened) {
      this.doFlip(target.classList, true);
      setTimeout(() => {
        setTimeout(() => {
          this.close();
          this.completeFlip(target.classList, true);
        }, 500);
        target.classList.remove("show");
        target.classList.remove("open");
      }, 500);
    } else {
      this.doFlip(target.classList);
      setTimeout(() => {
        setTimeout(() => {
          this.completeFlip(target.classList);
        }, 500);
        target.classList.add("show");
        target.classList.add("open");
        this.open();
      }, 500);
    }
  }

  render() {
    const { card } = this.props;

    return (
      <li className="card x2" onClick={this.handleCardClick.bind(this)}>
        <FontAwesomeIcon icon={card} />
      </li>
    );
  }
}
