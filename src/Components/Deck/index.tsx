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
  scoreUp: () => void;
  stageUp: () => void;
}

interface State {
  cards: Array<tCard>;
  prevCard: tCard | null;
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
    cards: this.getNewCards(1),
    prevCard: null,
    isFlipping: false,
    mapSize: 2,
    onNextStage: false
  };

  getNewCards(stage: number, nextGame = false) {
    const cards = shuffle<IconDefinition>(allIcons).slice(0, stage + 1);

    /* ToDo: 카드 갯수가 nxn보다 작으면 나머지 칸을 빈카드로 채움 */
    const tmp = Math.sqrt(cards.length * 2);
    const mapSize = tmp % 2 === 0 ? tmp : Math.floor(tmp) + 1;

    if (nextGame) {
      this.setState({
        mapSize
      });
    }
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
    const { scoreUp, stageUp } = this.props;
    const { prevCard, isFlipping } = this.state;
    const cards = this.state.cards.slice();

    if (isFlipping) return;
    if (cards[i].isOpened) return;
    if (cards[i].isChecked) return;
    if (!cards[i].card) return;
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

    if (cards[i].card!.iconName === prevCard!["card"]["iconName"]) {
      cards[i].isChecked = true;
      cards[prevCard!["id"]].isChecked = true;
      this.setState({
        cards: cards
      });
      scoreUp();
    } else {
      this.flip([i, prevCard!["id"]]);
    }
    await this.setState({
      prevCard: null,
      isFlipping: false
    });
    if (this.checkClear()) {
      /* ToDo: 다음 레벨로 넘어간다 */
      console.log("clear");
      stageUp();
      this.setState({
        cards: this.getNewCards(this.state.mapSize, true),
        onNextStage: true
      });
      // this.render();
    } else {
      console.log("not clear");
    }
  }

  async componentDidMount() {
    const { cards } = this.state;

    const cardIds = cards.map(card => card.id);
    this.setState({
      isFlipping: true
    });
    await this.flip(cardIds);
    setTimeout(async () => {
      await this.flip(cardIds);
      this.setState({
        isFlipping: false
      });
    }, 1000);
  }

  async componentDidUpdate() {
    const { cards, onNextStage } = this.state;

    if (onNextStage) {
      this.setState({
        onNextStage: false
      });
      // css로 카드가 뒤집어지는데 0.8초 걸려서 타임아웃으로 실행을 늦춤
      setTimeout(async () => {
        const cardIds = cards.map(card => card.id);
        this.setState({
          isFlipping: true
        });
        await this.flip(cardIds);
        setTimeout(async () => {
          await this.flip(cardIds);
          this.setState({
            isFlipping: false
          });
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
