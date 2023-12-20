import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const copyPass = useRef();

  let passgenMethod = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let index = 0; index < length; index++) {
      let ranNum = Math.floor(Math.random() * str.length);
      pass += str.charAt(ranNum);
    }

    setPassword(pass);
  }, [numberAllowed, charAllowed, length, setPassword]);

  useEffect(passgenMethod, [numberAllowed, charAllowed, length, setPassword]);

  return (
    <>
      <div style={{ backgroundColor: "#5F30BD" }}>
        <h1>Password Generator</h1>
        <input type="text" readOnly value={password} ref={copyPass} />
        <h1>Numbers</h1>
        <input
          type="checkbox"
          id=""
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <h1>Characters</h1>
        <input
          type="checkbox"
          name=""
          id=""
          defaultChecked={charAllowed}
          onChange={() => {
            setcharAllowed((prev) => !prev);
          }}
        />
        <h1>Number of text</h1>
        <input
          type="range"
          name=""
          id=""
          min={6}
          max={20}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            copyPass.current.select();
            let text = copyPass.current.value;
            navigator.clipboard.writeText(text);
            console.log("clicked");
          }}
          style={{ backgroundColor: "black", color: "white" }}
        >
          Copy Password
        </button>
      </div>
    </>
  );
}
export default App;
