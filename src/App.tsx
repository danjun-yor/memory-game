import React, { Component } from "react";
import "./reset.scss";
import "./styles.scss";
import Deck from "./Components/Deck";
import { formatSeconds } from "./Functions";

interface Props {}

interface State {}

export default class App extends Component<Props, State> {
  state = {
    stage: 20,
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

  scoreUp() {
    this.setState({
      score: this.state.score + 100
    });
  }

  render() {
    const { stage, score, time } = this.state;

    return (
      <div className="App">
        <header>
          <h1>짝 맞추기 게임</h1>
        </header>
        {/*
        1. 레벨이 증가할 때마다 게임의 칸수가 2x2 부터 가로/세로 하나씩 증가
        2. 제한시간은 2분! => 지나면 종료
        */}
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
            stageUp={this.stageUp.bind(this)}
          />
        </main>

        <footer></footer>
      </div>
    );
  }
}
