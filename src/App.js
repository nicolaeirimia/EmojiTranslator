import './App.css';
import React, { useState } from "react";
import emojies from "./emojies.js";
import swapImage from './swap-arrows.png';

function App() {
  let [String_1, setString_1] = useState("");
  let [String_2, setString_2] = useState("");
  const regInput = /^[A-Za-z0-9 \r\n|\r|\n .,;:!?"'/$]*$/;
  return (
    <div>
      <h1>
        {"Emoji Translat🙃r"}
      </h1>
      <div className="translation">
        <textarea 
          maxLength="1500"
          type = "text"
          value = {String_1}
          placeholder="Introdu aici un mesaj"
          onChange = {(e) => {
              if(regInput.test(e.target.value)){
                setString_1(e.target.value);
                setString_2(
                  e.target.value
                    .split("")
                    .map((letter) => emojies[letter.toLowerCase()])
                    .join("")
              );
            }
          }
          }
        />
      </div>

          <div className="button">
            <button
              onClick = { () => {
                let aux = String_1;
                setString_1(String_2);
                setString_2(aux);
                console.log(String_1, String_2);
              }
              }
            >
              <img src={swapImage}>

              </img>
            </button>
          </div>

      <div className="translated">
        <textarea 
          type = "text"
          value = {String_2}
          placeholder = "Scrie ceva pentru a primi traducerea"
        >
        </textarea>
      </div>
    </div>
  );
}

export default App;
