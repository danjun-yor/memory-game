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
  isFlipping: boolean;
}

export type tCard = {
  id: number;
  card: IconDefinition;
  isOpened: boolean;
  isFlipping: boolean;
  shouldShow: boolean;
  isChecked: boolean;
};

export default class Deck extends Component<Props, State> {
  state = {
    cards: this.initCards(),
    prevCard: null,
    isFlipping: false
  };

  initCards() {
    const cards = shuffle<IconDefinition>(allIcons).slice(0, 2);
    return shuffle<IconDefinition>([...cards, ...cards]).map((card, i) => {
      return {
        id: i,
        card: card,
        isOpened: false,
        isFlipping: false,
        shouldShow: false,
        isChecked: false
      };
    });
  }

  checkClear() {
    const { cards } = this.state;
    return cards.filter(card => card.isChecked).length === cards.length
      ? true
      : false;
  }

  flip(ids: number[]) {
    this.startFlip(ids);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setTimeout(() => {
          this.finishFlip(ids);
          return resolve(true);
        }, 500);
        this.showCard(ids);
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
    const { prevCard, isFlipping } = this.state;
    const cards = this.state.cards.slice();

    if (isFlipping) return;
    if (cards[i].isChecked) return;
    this.setState({
      isFlipping: true
    });

    const isDone = await this.flip([i]);
    /* ToDo: 카드쌍 맞았는지 틀렸는지 체크 */
    if (!prevCard) {
      this.setState({
        prevCard: cards[i],
        isFlipping: false
      });
      return;
    }

    if (cards[i].card.iconName === prevCard!["card"]["iconName"]) {
      cards[i].isChecked = true;
      cards[prevCard!["id"]].isChecked = true;
      this.setState({
        cards: cards
      });
      if (this.checkClear()) {
        /* ToDo: 다음 레벨로 넘어간다 */
        console.log("clear");
      } else {
        console.log("not clear");
      }
    } else {
      this.flip([i, prevCard!["id"]]);
    }
    this.setState({
      prevCard: null,
      isFlipping: false
    });
  }

  async componentDidMount() {
    /* ToDo: 모든 카드를 3초간 보여준 후, 다시 뒤집기 */
    const { cards } = this.state;

    const cardIds = cards.map(card => card.id);
    await this.flip(cardIds);
    setTimeout(() => {
      this.flip(cardIds);
    }, 1000);
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
