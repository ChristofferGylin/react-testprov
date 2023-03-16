// 3. Öka eller minska en siffra. 3p
// En siffra ska visas på sidan och siffran ska vara kopplad till useState.
// Skapa en komponent: LessButton som via en callback-funktion minskar siffrans
// värde med ett när man klickar på en knapp i komponenten.
// Skapa en button i App.jsx som ökar siffrans väde med ett.

import { useState } from "react";
import Button from "./Button";

function App() {

  const [count, setCount] = useState(0);

  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => count - 1);
  return (
    <div>
      <p>{count}</p>
      <Button title='More plz' callback={increase} />
      <Button title='Less plz' callback={decrease} />
    </div>
  );
}

export default App;
