import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const n1 = now.getDate();
  const n2 = now.getDay();
  const n2day = daysOfWeek[n2];
  const n3 = now.getFullYear();
  const future = new Date();
  future.setDate(now.getDate() + count);
  const dat = future.getDate();
  const day = future.getDay();
  const dayName = daysOfWeek[day];
  const year = future.getFullYear();
  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>Step : {step} </span>
      <br />
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={() => setCount((c) => c + step)}>+</button>
      <p>
        {dat}-{dayName}-{year} days from today is {n1}-{n2day}-{n3}
      </p>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
