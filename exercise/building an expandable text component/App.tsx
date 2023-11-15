import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={10}>hello wo</ExpandableText>
    </div>
  );
}

export default App;
