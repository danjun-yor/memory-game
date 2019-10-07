import React from "react";
import "./reset.scss";
import "./styles.scss";
import Cards from "./Components/Cards";

function App() {
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
          레벨: <span>1</span>
          점수: <span>0</span>
          시간: <span>0:00</span>
        </section>
        <section className="deck">
          <Cards></Cards>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
