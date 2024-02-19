import "./App.css";
import "./components/card";
import { useState } from "react";
import Card from "./components/card";
function App() {
  const [items, setitems] = useState([]);
  const [iscardVisible, setiscardVisisble] = useState(false);
  function newCardHandler() {
    setiscardVisisble(!iscardVisible);
  }
  const [textContent,settextContent] = useState("");
  console.log(textContent)
  return (
    <div className="Outside-Conatiner">
      <div className="Title">
        <h1>what-todo</h1>
      </div>
      <div className="newCardButton">
        <button onClick={newCardHandler}>+</button>
      </div>
      {iscardVisible && <Card  onwrite={settextContent}/> }
    </div>
  );
}

export default App;
