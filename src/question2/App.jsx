// 2. Hämta och visa användare. 3p
// Ladda ner användare med fetch från denna url: https://jsonplaceholder.typicode.com/users
// Föjlande information från varje användare ska visas i en tablell på sidan:
// name, email, city och company name.
// För att skapa tabellen går det bra att använda table eller vanliga div-ar

import { useEffect, useRef, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const url = useRef('https://jsonplaceholder.typicode.com/users');

  const getData = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.ok) {

      const data = await response.json();
      console.log(data)
      setData(data);

    }

  }

  useEffect(() => {

    getData();

  }, [])

  return (

    <div>
      <ul>
        {data.map((user) => {
          return (

            <li key={user.id}>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.address.city}</div>
              <div>{user.company.name}</div>
            </li>

          )
        })}
      </ul>
    </div>

  );
}

export default App;
