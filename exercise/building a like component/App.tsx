import Like from "./components/Like";
// import {}

function App() {
  return (
    <div>
      <Like onClick={() => console.log("clicked!")}></Like>
    </div>
  );
}

export default App;
