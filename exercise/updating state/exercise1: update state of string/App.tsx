import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "john",
    },
  });

  const handleClick = () => {
    // game.id = 2;
    // game.player.name = "Bob";
    // ...game: means copy all the game properties.
    setGame({ ...game, player: { ...game.player, name: "bob" } });
    console.log(game.id, game.player.name);
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
