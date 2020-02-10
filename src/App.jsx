import React from "react";
import "./app.css";

import Abc from "./Machine";

class App extends React.Component {
  render() {
    const Fruits = ["💙", "💛", "💚"];
    let a = Math.floor(Math.random() * Fruits.length);
    let b = Math.floor(Math.random() * Fruits.length);
    let c = Math.floor(Math.random() * Fruits.length);
    const winner = a === b && a === c;
    return (
      <div style={{ width: "50%", margin: "auto" }} className="Machine">
        <h1>Slot Machines!</h1>
        <Abc s1={Fruits[a]} s2={Fruits[b]} s3={Fruits[c]} />
        <h4 className={winner ? "Machine-Winner" : "Machine-Loser"}>
          {winner ? "YOU WIN!!! 😁" : "You lose 🤔"}
        </h4>
      </div>
    );
  }
}

export default App;
