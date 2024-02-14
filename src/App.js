import './App.css';
import './components/card';
import Card from './components/card';
function App(){
  function newCardHandler(){
    alert("Button");
  }
  return(
    <div className="Outside-Conatiner" >
      <div className="Title">
          <h1>what-todo</h1>
      </div>
      <div className="newCardButton">
      <button onClick={newCardHandler}>+</button>
      </div>
      <Card />

    </div>
  )
}

export default App;