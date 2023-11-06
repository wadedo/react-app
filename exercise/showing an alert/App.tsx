import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlert] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlert(false);
          }}
        >
          my alert
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlert(true)}>
        My Button
      </Button>
    </div>
  );
}
