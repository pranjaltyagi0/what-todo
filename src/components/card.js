import "./card.css";
function Card({onwrite}) {
  function handletextchange(e){
    onwrite(e.target.value);
  }
  return (
    <div className="cardContainerExternal">
      <div className="cardConatinerInternal">
        <input type="text" name="todo" onChange={handletextchange}></input>
      </div>
    </div>
  );
}

export default Card;
