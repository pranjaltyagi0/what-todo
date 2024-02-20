import "./App.css";
import "./components/popup";
import { useState } from "react";
import Popup from "./components/popup";
function App() {
  const [items, setitems] = useState([]);
  const [iscardVisible, setiscardVisisble] = useState(false);
  function newCardHandler() {
    setiscardVisisble(!iscardVisible);
  }
  return (
    <div className="Outside-Conatiner">
      <div className="Title">
        <h1>what-todo</h1>
      </div>
      <div className="newPopupButton">
        <button onClick={newCardHandler}>+</button>
      </div>
      {/* {iscardVisible && <Popup  /> } */}
      <Popup />
    </div>
  );
}

export default App;
