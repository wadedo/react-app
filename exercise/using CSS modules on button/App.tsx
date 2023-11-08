import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("clicked")}>
        mybutton
      </Button>
    </div>
  );
}

export default App;
