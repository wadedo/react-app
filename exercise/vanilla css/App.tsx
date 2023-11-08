import ListGroup from "./components/ListGroup";

function App() {
  let items = ["new york", "san francisco", "florida", "tokyo", "london"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        // onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
