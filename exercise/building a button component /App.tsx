以下是 父级component的code：
import Button from "./components/Button";

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
