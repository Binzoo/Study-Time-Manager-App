import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setTodo] = useState("");
  const [listToDO, setListTOdo] = useState([]);

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setListTOdo([...listToDO, toDo]);
        }}
      >
        Add
      </button>

      <ul>
        {listToDO.map((things, index) => (
          <li key={index}>{things}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
