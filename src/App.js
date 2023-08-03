import "./index.css";
import { useState } from "react";

// Components
import Accelerometer from "./Accelerometer";

function App() {
  const [permissionGranted, setPermissionGranted] = useState(false);

  return (
    <div className="App">
      {permissionGranted ? (
        <h1>Permission has been granted</h1>
      ) : (
        <Accelerometer
          permissionGranted={permissionGranted}
          setPermissionGranted={setPermissionGranted}
        />
      )}
    </div>
  );
}

export default App;