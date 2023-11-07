import ListGroup from "./components/ListGroup";

function App() {
  let items = ["new york", "san francisco", "florida", "tokyo", "london"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
