import React from 'react';
import { useState } from 'react';
import Popup from "./Popup";
import "./Word.css";

function Definition({word, definition}) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <span>
    <span onClick={() => setButtonPopup(true)}>
      <span id='word'>{word}</span>
    </span>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
    <h3>{word}</h3>
    <p>{definition}</p>
    </Popup>
    </span>
  )
}

export default Definition;