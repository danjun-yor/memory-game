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

interface Props {
  stage: number;
  scoreUp: (cnt: number) => void;
  scoreDown: (cnt: number) => void;
  stageUp: () => void;
}

interface State {
  cards: Array<tCard>;
  isFlipping: boolean;
  mapSize: number;
  onNextStage: boolean;
}

export type tCard = {
  id: number;
  card: IconDefinition | null;
  isOpened: boolean;
  isFlipping: boolean;
  shouldShow: boolean;
  isChecked: boolean;
};

export default class Deck extends Component<Props, State> {
  state = {
    cards: this.getNewCards(this.props.stage),
    isFlipping: false,
    mapSize: this.getMapSize(this.props.stage),
    onNextStage: false
  };

  checkCardIds = [] as Array<number>;

  getMapSize(stage: number) {
    const value = Math.floor(Math.sqrt((stage + 2) * 2));
    return (stage + 2) * 2 === Math.pow(value, 2) ? value : value + 1;
  }

  getNewCards(stage: number) {
    const cards = shuffle<IconDefinition>(allIcons).slice(0, stage + 2);

    /* ToDo: 카드 갯수가 nxn보다 작으면 나머지 칸을 빈카드로 채움 */
    const mapSize = this.getMapSize(stage);
    const totalCardCount = Math.pow(mapSize, 2);
    const emptyCards = new Array(totalCardCount - cards.length * 2)
      .fill(0)
      .map((v, i) => {
        return {
          id: 1000 + i,
          card: null,
          isOpened: true,
          isFlipping: false,
          shouldShow: false,
          isChecked: true
        };
      });

    return [
      ...shuffle<IconDefinition>([...cards, ...cards]).map((card, i) => {
        return {
          id: i,
          card: card,
          isOpened: false,
          isFlipping: false,
          shouldShow: false,
          isChecked: false
        };
      }),
      ...emptyCards
    ];
  }

  flip(ids: number[]) {
    this.startFlip(ids);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setTimeout(() => {
          this.finishFlip(ids);
          return resolve(true);
        }, 400);
        this.showCard(ids);
      }, 400);
    });
  }

  startFlip(ids: number[]) {
    const cards = this.state.cards.slice();

    for (let id of ids) {
      if (id < cards.length && cards[id].card) {
        cards[id].isFlipping = true;
      }
    }

    this.setState({
      cards
    });
  }

  finishFlip(ids: number[]) {
    const cards = this.state.cards.slice();

    for (let id of ids) {
      if (id < cards.length && cards[id].card) {
        cards[id].isOpened = !cards[id].isOpened;
        cards[id].isFlipping = false;
      }
    }

    this.setState({
      cards
    });
  }

  showCard(ids: number[]) {
    const cards = this.state.cards.slice();

    for (let id of ids) {
      if (id < cards.length && cards[id].card) {
        cards[id].shouldShow = cards[id].isOpened ? false : true;
      }
    }

    this.setState({
      cards
    });
  }

  async handleCardClick(i: number) {
    const cards = this.state.cards.slice();

    if (!cards[i]) return;
    if (!cards[i].card) return;
    if (cards[i].isOpened) return;
    if (cards[i].isChecked) return;
    if (cards[i].isFlipping) return;

    const checkCardIds = this.checkCardIds;
    checkCardIds.push(i);

    await this.flip([i]);
    // console.log(checkCardIds);
    if (cards.every(card => !card.isFlipping)) {
      let succCnt = 0,
        failCnt = 0;
      const shouldFilpCardIds = [];
      while (checkCardIds.length >= 2) {
        const pairCardIds = checkCardIds.splice(0, 2);

        if (
          cards[pairCardIds[0]].card!.iconName ===
          cards[pairCardIds[1]].card!.iconName
        ) {
          cards[pairCardIds[0]].isChecked = true;
          cards[pairCardIds[1]].isChecked = true;
          succCnt++;
        } else {
          shouldFilpCardIds.push(...pairCardIds);
          failCnt++;
        }
      }

      if (shouldFilpCardIds.length > 0) {
        await this.flip(shouldFilpCardIds);
      }

      this.props.scoreUp(succCnt);
      this.props.scoreDown(failCnt);
      if (cards.every(card => card.isChecked)) {
        setTimeout(() => {
          this.props.stageUp();
          this.setState({
            cards: this.getNewCards(this.props.stage),
            mapSize: this.getMapSize(this.props.stage),
            onNextStage: true
          });
        }, 800);
      } else {
        this.setState({
          cards: cards
        });
      }
    }
  }

  async componentDidMount() {
    const { cards } = this.state;

    const cardIds = cards.map(card => card.id);
    await this.flip(cardIds);
    setTimeout(async () => {
      await this.flip(cardIds);
    }, 1000);
  }

  async componentDidUpdate() {
    const { onNextStage } = this.state;
    const { cards } = this.state;

    if (onNextStage) {
      this.setState({
        onNextStage: false
      });
      setTimeout(async () => {
        const cardIds = cards.map(card => card.id);
        await this.flip(cardIds);
        setTimeout(async () => {
          await this.flip(cardIds);
        }, 1000);
      }, 400);
    }
  }

  render() {
    const { cards, mapSize } = this.state;

    return (
      <section className="deck">
        <ul className="cards">
          {cards.map((card, i) => (
            <Card
              key={card.id}
              size={mapSize}
              card={card}
              handleCardClick={this.handleCardClick.bind(this)}
            />
          ))}
        </ul>
      </section>
    );
  }
}
