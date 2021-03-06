import React, { Component } from "react";
import "./styles.scss";
import Deck from "../../Components/Deck";
import { formatSeconds } from "../../Functions";
import LinkButton from "../../Components/LinkButton";
import { UserContext } from "../../Contexts/UserContext";

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
      <UserContext.Consumer>
        {({ user }) => {
          return (
            <div className="App">
              <header>
                <h1>짝 맞추기 게임</h1>
                <div className="sign-btn-group">
                  {user && user["name"] ? (
                    <>
                      <span style={{ marginRight: "5px" }}>{user.name}</span>
                      <LinkButton className="link-btn in">내정보</LinkButton>
                      <LinkButton className="link-btn up">로그아웃</LinkButton>
                    </>
                  ) : (
                    <>
                      <LinkButton
                        to="/signin"
                        className="link-btn link-sign in"
                      >
                        로그인
                      </LinkButton>
                      <LinkButton
                        to="/signup"
                        className="link-btn link-sign up"
                      >
                        회원가입
                      </LinkButton>
                    </>
                  )}
                </div>
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
        }}
      </UserContext.Consumer>
    );
  }
}
export default Game;
