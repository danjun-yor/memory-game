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
  prevCard: tCard | null;
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
    prevCard: null
  };

  initCards() {
    const cards = shuffle<IconDefinition>(allIcons).slice(0, 2);
    return shuffle<IconDefinition>([...cards, ...cards]).map((card, i) => {
      return {
        id: i,
        card: card,
        isOpened: false,
        isFlipping: false,
        shouldShow: false
      };
    });
  }

  flip(ids: number[]) {
    this.startFlip(ids);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setTimeout(() => {
          this.finishFlip(ids);
        }, 500);
        this.showCard(ids);
        return resolve(true);
      }, 500);
    });
  }

  startFlip(ids: number[]) {
    const cards = this.state.cards.slice();

    for (let id of ids) {
      cards[id].isFlipping = true;
    }

    this.setState({
      cards
    });
  }

  finishFlip(ids: number[]) {
    const cards = this.state.cards.slice();

    for (let id of ids) {
      cards[id].isOpened = !cards[id].isOpened;
      cards[id].isFlipping = false;
    }

    this.setState({
      cards
    });
  }

  showCard(ids: number[]) {
    const cards = this.state.cards.slice();

    for (let id of ids) {
      cards[id].shouldShow = cards[id].isOpened ? false : true;
    }

    this.setState({
      cards
    });
  }

  async handleCardClick(i: number) {
    const { prevCard } = this.state;
    const cards = this.state.cards.slice();

    if (cards[i].isFlipping) {
      return;
    }

    const isDone = await this.flip([i]);
    if (!isDone) return;
    /* ToDo: 카드쌍 맞았는지 틀렸는지 체크 */
    if (!prevCard) {
      this.setState({
        prevCard: cards[i]
      });
      return;
    }
    if (cards[i].card.iconName === prevCard) {
    } else {
    }
    this.setState({
      prevCard: null
    });
  }

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
