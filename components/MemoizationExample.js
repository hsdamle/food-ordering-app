import { useMemo, useState } from "react";

export default function MemoizationExample() {
  const [text, setText] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const memoizedPrimeFunction = () => useMemo(findNthPrime, [text]);

  return (
    <div>
      <h1>Memoization Component Example</h1>
      <label>{darkMode ? "Dark Mode" : "Light Mode"}</label>
      <button className="margin-class" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
      <br />
      <input
        className="margin-class"
        type="number"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></input>
      <div>
        <h4>Prime Number : {memoizedPrimeFunction()}</h4>
      </div>
    </div>
  );

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  //Function to find the nth prime number
  function findNthPrime() {
    let count = 0;
    let num = 2;
    while (count < text) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1;
  }
}
