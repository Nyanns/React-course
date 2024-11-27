import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [fizzBuzzResult, setFizzBuzzResult] = useState(""); // State untuk hasil FizzBuzz

  // Fungsi untuk mengubah count
  const handleCount = (action) => {
    let newCount = count;

    if (action === "increment") {
      newCount = count + 1;
    } else if (action === "decrement" && count > 0) {
      newCount = count - 1;
    } else if (action === "reset") {
      newCount = 0;
    }

    setCount(newCount);
    updateFizzBuzz(newCount); // Perbarui hasil FizzBuzz
  };

  // Fungsi untuk menghitung FizzBuzz
  const updateFizzBuzz = (number) => {
    if (number % 5 === 0 && number % 7 === 0) {
      setFizzBuzzResult("FIZZBUZZ");
    } else if (number % 5 === 0) {
      setFizzBuzzResult("FIZZ");
    } else if (number % 7 === 0) {
      setFizzBuzzResult("BUZZ");
    } else {
      setFizzBuzzResult(number);
    }
  };

  return (
    <div className="counter">
      <h1 className="counter__title">Cyberpunk Counter</h1>
      <p className="counter__display">{fizzBuzzResult}</p>
      <div className="counter__controls">
        <button
          className="counter__button counter__button--increment"
          onClick={() => handleCount("increment")}
        >
          Increase (+)
        </button>
        <button
          className="counter__button counter__button--decrement"
          onClick={() => handleCount("decrement")}
        >
          Decrease (-)
        </button>
        <button
          className="counter__button counter__button--reset"
          onClick={() => handleCount("reset")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
