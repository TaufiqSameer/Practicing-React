import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [friendDiscount, setFriendDiscount] = useState(0);

  return (
    <div className="App">
      <h1>Welcome to Bill calculator</h1>

      <BillCalc amount={amount} setAmount={setAmount} />

      <TipService
        discount={discount}
        setDiscount={setDiscount}
        who={"you"}
        amount={amount}
        setAmount={setAmount}
      />

      <TipService
        discount={friendDiscount}
        setDiscount={setFriendDiscount}
        who={"your Friend"}
        amount={amount}
        setAmount={setAmount}
      />
      <Calc
        amount={amount}
        discount={discount}
        friendDiscount={friendDiscount}
      />
      <Reset
        setAmount={setAmount}
        setDiscount={setDiscount}
        setFriendDiscount={setFriendDiscount}
      />
    </div>
  );
}

function BillCalc({ amount, setAmount }) {
  return (
    <div>
      <p>How much was the bill:</p>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
    </div>
  );
}

function TipService({ discount, setDiscount, who }) {
  let arr = [
    "None",
    "It was good(5%)",
    "Too good(10%)",
    "Extremely pleased(20%)",
  ];

  return (
    <div>
      <p>How did {who} like the service?</p>

      <select
        name="Tip"
        value={discount}
        onChange={(e) => setDiscount(Number(e.target.value))}
      >
        {arr.map((text, index) => (
          <option value={index} key={index}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}

function Calc({ amount, discount, friendDiscount }) {
  const percents = [0, 5, 10, 20];

  const tip1 = amount * (percents[discount] / 100);
  const tip2 = amount * (percents[friendDiscount] / 100);

  const total = amount + tip1 + tip2;

  return (
    <div>
      <h1>
        The amount is : {amount} with tip by you : {tip1} and by your friend :{" "}
        {tip2}
      </h1>
      <h1>Total bill is :</h1>
      <h1>{total}</h1>
    </div>
  );
}

function Reset({ setAmount, setDiscount, setFriendDiscount }) {
  return (
    <button
      onClick={() => {
        setAmount(0);
        setDiscount(0);
        setFriendDiscount(0);
      }}
    >
      Reset
    </button>
  );
}
