import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";//intention!

function App() {
  let items = ["new york", "san francisco", "florida", "tokyo", "london"];
  return (
    <div>
      <BsFillCalendarFill color="red" size="40"></BsFillCalendarFill>
      {/* intention */}
      <ListGroup
        items={items}
        heading="Cities"
        // onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
