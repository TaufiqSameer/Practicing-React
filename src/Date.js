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
      <button onClick={() => setStep((s) => s - 1)}>-</button>
      <span>Step : {step} </span>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
      <br />
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <span>Count: {count} </span>
      <button onClick={() => setCount((c) => c + step)}>+</button>

      <p>
        {dat}-{dayName}-{year} days from today is {n1}-{n2day}-{n3}
      </p>
    </div>
  );
}
