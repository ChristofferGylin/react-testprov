// 4. Öka eller minska en siffra med redux. 3p
// En siffra ska visas på sidan och siffran ska vara kopplad till redux.
// Skapa en komponent: LessButtonWithRedux som via redux minskar siffrans
// värde med ett när man klickar på en knapp i komponenten.
// Skapa en button i App.jsx som ökar siffrans värde med ett.

import { decrease, increase, number } from "./redux/number";

function App() {

  const reduxNumber = number();
  console.log(reduxNumber)
  return (
    <div>
      <div>{reduxNumber.number}</div>
      <button onClick={increase}>More</button>
      <button onClick={decrease}>less</button>
    </div>

  );
}

export default App;
