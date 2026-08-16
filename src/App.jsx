import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import { useState } from "react";


function App () {
    const [count, setCount] = useState(0);
    const decrement = () => setCount((prevCount) => prevCount - 1);
    const increment = () => setCount((prevCount) => prevCount + 1);
  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count = {count} decrement={decrement} increment= {increment}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent exponent = {2} num = {count} increment={increment} decrement={decrement}></Exponent>
        <Exponent exponent = {3} num = {count} increment={increment} decrement={decrement}></Exponent>
        <Exponent exponent = {4} num = {count} increment={increment} decrement={decrement}></Exponent>
        <Exponent exponent = {5} num = {count} increment={increment} decrement={decrement}></Exponent>
        <Exponent exponent = {6} num = {count} increment={increment} decrement={decrement}></Exponent>
      </div>
    </div>
  );
}

export default App;
