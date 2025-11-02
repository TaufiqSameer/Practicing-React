import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onToggle={handleToggle}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>😂This is our logo💕</h1>;
}
function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    if (!description) return;
    let x = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItems(x);
    console.log(x);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button type="submit">ADD</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem, onToggle, setItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  function clearList() {
    setItems([]);
  }

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by packed Order</option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggle(item.id);
        }}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  if (!items.length) return <p className="stats">Start adding some items</p>;
  const numberOfItems = items.length;
  const packedd = items.filter((i) => i.packed).length;
  const percent = Math.round((packedd / numberOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything to go"
          : `You have ${numberOfItems} items on your list, and u have packed ${packedd}(${percent}%) `}
      </em>
    </footer>
  );
}

export default App;
