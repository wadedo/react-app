import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "adding"],
    });
    console.log(pizza.name, pizza.toppings);
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
