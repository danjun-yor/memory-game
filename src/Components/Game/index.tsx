import React, { Component } from "react";
import { gql } from "apollo-boost";
import "./styles.scss";
import Deck from "../Deck";
import { formatSeconds } from "../../Functions";
import LinkButton from "../LinkButton";

interface Props {}
interface State {}

class Game extends Component<Props, State> {
  state = {
    stage: 1,
    score: 0,
    time: 0
  };

  timerID = (0 as unknown) as NodeJS.Timeout;

  // 레벨 초기화
  initStage() {
    this.setState({ stage: 1 });
  }

  // 레벨 업
  stageUp() {
    this.setState({
      stage: this.state.stage + 1
    });
  }

  startTimer() {
    this.timerID = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  scoreUp(cnt: number) {
    this.setState({
      score: this.state.score + 100 * cnt
    });
  }

  scoreDown(cnt: number) {
    this.setState({
      score: this.state.score - 10 * cnt
    });
  }

  render() {
    const { stage, score, time } = this.state;

    return (
      <div className="App">
        <header>
          <h1>짝 맞추기 게임</h1>
          <LinkButton to="/login" className="login-link">
            로그인
          </LinkButton>
        </header>
        <main>
          <section className="score-panel">
            <div>
              스테이지: <span>{stage}</span>
            </div>
            <div>
              점수: <span>{score}</span>
            </div>
            <div>
              시간: <span>{formatSeconds(time)}</span>
            </div>
          </section>
          <Deck
            stage={stage}
            scoreUp={this.scoreUp.bind(this)}
            scoreDown={this.scoreDown.bind(this)}
            stageUp={this.stageUp.bind(this)}
          />
        </main>

        <footer></footer>
      </div>
    );
  }
}
export default Game;
