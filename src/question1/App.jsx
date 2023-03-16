// 1. Uppdatera person-info. 3p
//
// Visa informationen i objektet person på sidan nedan.
// Brevid varje bit information ska det finnas en edit-knapp.
//
// När man klickar på edit-knappen ska man kunna uppdatera och spara
// informationen genom att den läggs i ett input-fält samtidigt som
// edit-knappen blir en spara-knapp.
//
// När man klickar på spara ska inputfältet bytas tillbaka till en
// vanlig div med den nya informationen.

import { useRef, useState } from "react";

const person = {
  firstName: "Fred",
  lastName: "Smith",
};

function App() {
  const [first, setFirst] = useState(person.firstName);
  const [last, setLast] = useState(person.lastName);

  return (

    <div>

      <ul>
        <ListElement title="First Name" value={first} callback={setFirst} />
        <ListElement title="Last Name" value={last} callback={setLast} />
      </ul>

    </div>

  );
}

const ListElement = (props) => {

  const { title, value, callback } = props;
  const [edit, setEdit] = useState(false);
  const [buttonTitle, setButtonTitle] = useState('Edit');
  const inputRef = useRef(null);

  let Render;

  if (edit) {

    Render = () => <input ref={inputRef} type={'text'} defaultValue={value}></input>;


  } else {

    Render = () => <div>{value}</div>

  }

  const handleClick = () => {

    if (edit) {

      setButtonTitle('Edit');
      callback(inputRef.current.value);


    } else {

      setButtonTitle('Save');

    }
    setEdit(!edit);


  }

  return (
    <li>{title}: {<Render />} <button onClick={handleClick}>{buttonTitle}</button></li>
  )

}

export default App;
