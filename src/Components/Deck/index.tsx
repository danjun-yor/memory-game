import React, { Component } from "react";
import "./styles.scss";
import {
  faBicycle,
  faCube,
  faBolt,
  faBomb,
  faBone,
  faLeaf,
  faPlane,
  faAnchor,
  faBus,
  faGlobe,
  faWineGlass,
  faTv,
  faTaxi,
  faArchway,
  faAppleAlt,
  faBacon,
  faCookie,
  faFish,
  faPizzaSlice,
  faLemon,
  faIceCream,
  faSeedling,
  faCheese,
  faCarrot,
  faCandyCane,
  faChessBishop,
  faChessKing,
  faChessPawn,
  faChessKnight,
  faChessQueen,
  faDice,
  faGuitar,
  faHeadphones,
  faMusic,
  faHeart,
  faStar,
  faBroom,
  faCat,
  faGhost,
  faCrow,
  faMask,
  faBurn,
  faCannabis,
  faBong,
  faPlus,
  faShoppingBag,
  faStore,
  faTshirt,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { shuffle } from "../../Functions";
import Card from "../Card";

const allIcons = [
  faBicycle,
  faCube,
  faBolt,
  faBomb,
  faBone,
  faLeaf,
  faPlane,
  faAnchor,
  faBus,
  faGlobe,
  faWineGlass,
  faTv,
  faTaxi,
  faArchway,
  faAppleAlt,
  faBacon,
  faCookie,
  faFish,
  faPizzaSlice,
  faLemon,
  faIceCream,
  faSeedling,
  faCheese,
  faCarrot,
  faCandyCane,
  faChessBishop,
  faChessKing,
  faChessPawn,
  faChessKnight,
  faChessQueen,
  faDice,
  faGuitar,
  faHeadphones,
  faMusic,
  faHeart,
  faStar,
  faBroom,
  faCat,
  faGhost,
  faCrow,
  faMask,
  faBurn,
  faCannabis,
  faBong,
  faPlus,
  faShoppingBag,
  faStore,
  faTshirt
];

interface Props {}

interface State {
  cards: Array<tCard>;
  selectedCardCount: number;
}

export type tCard = {
  id: number;
  card: IconDefinition;
  isOpened: boolean;
  isFlipping: boolean;
  shouldShow: boolean;
};

export default class Deck extends Component<Props, State> {
  state = {
    cards: this.initCards(),
    selectedCardCount: 0
  };

  initCards() {
    const cards = shuffle(allIcons).slice(0, 2);
    return shuffle([...cards, ...cards]).map((card, i) => {
      return {
        id: i,
        card: card,
        isOpened: false,
        isFlipping: false,
        shouldShow: false
      };
    });
  }

  setCount(number: number = 0) {
    this.setState({
      selectedCardCount: number
    });
  }

  doFlip(i: number) {
    const cards = this.state.cards.slice();
    cards[i].isFlipping = true;
    this.setState({
      cards
    });
  }

  finishFlip(i: number) {
    const cards = this.state.cards.slice();
    cards[i].isOpened = !cards[i].isOpened;
    cards[i].isFlipping = false;
    this.setState({
      cards
    });
  }

  handleCardClick(i: number) {
    const cards = this.state.cards.slice();

    if (cards[i].isFlipping) {
      return;
    }

    this.doFlip(i);
    setTimeout(() => {
      setTimeout(() => {
        this.finishFlip(i);
      }, 500);
      cards[i].shouldShow = cards[i].isOpened ? false : true;
      this.setState({
        cards
      });
    }, 500);
  }

  // renderCard() {
  //   return <Card key={i} card={card} onClick={this.setCount.bind(this)} />;
  // }

  render() {
    const { cards } = this.state;
    return (
      <section className="deck">
        <ul className="cards">
          {cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              handleCardClick={this.handleCardClick.bind(this)}
            />
          ))}
        </ul>
      </section>
    );
  }
}
