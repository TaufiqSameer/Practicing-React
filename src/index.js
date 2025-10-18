import React, { useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App(){
    // const [count,Setcound] = useState(0);
    return (<div>
        {/* <h1>Hello React!{count}</h1>
        <button onClick={() =>
            Setcound(count + 1)
        }>click me</button> */}
        <Header />
        <Menu />
        <Footer />
        </div>);
}

function Pizza({pizzaObj}){
  
  return (
    <li className="pizza">
      <img 
        src={pizzaObj.photoName} 
        alt={pizzaObj.name} 
      />
      <div>
        <h3>{pizzaObj.name}</h3>
      <p>
        {pizzaObj.ingredients}
      </p>
      <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
   
}

function Menu(){
    return (
        <main className="menu">
        <div>
          <p>Authentic Italian cusine, Creative dishes to chhose from . All from our stone oven, all organic, all delicious</p>

        <h2>Our Menu.</h2>
        <ul>
{pizzaData.map((pizza) => (
  <Pizza pizzaObj={pizza} key={pizza.name} />
))}
        </ul>
        {/* <Pizza name='Pizza Spinachi' ingredient = 'Pizza — Tomato, mozzarella, and pepperoni' photo='pizzas/spinaci.jpg'
         price='10'/>
         <Pizza name='Margherita' ingredient = 'Tomato and mozarella' photo='pizzas/margherita.jpg'
         price='10'/> */}
        </div>
        </main>
    )
}
function Header(){
    return <h1>Pizza Menu.</h1>
}

function Footer(){
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    console.log(openHour,closeHour);
    const checkOpen = hour >= openHour && hour <= closeHour;
    console.log(checkOpen);

    return (
      <footer className="footer">
        {checkOpen ? (
          <Order openHour={closeHour}  />
) : (
          <p>WE are happy to welcome you between {openHour} and {closeHour}</p>
        )}

      </footer>
    );
    // return React.createElement('footer',null,"We are currently open");
  }

function Order(props){
  return(
            <div className="order">
        <p>
          We're open unti; {props.closeHour}:00. Come Visit ur or order online
        </p>
        <button className="btn">Order</button>
        </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);




