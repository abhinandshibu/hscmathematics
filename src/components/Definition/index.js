import React from 'react';
import { useState } from 'react';
import Popup from "./Popup";
import "./Definition.css";

export default function Definition({word, children}) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <span>
    <span onClick={() => setButtonPopup(true)}>
      <span id='word'>{word}</span>
    </span>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
    <h3 className='capitalize'>{word}</h3>
    <p1>{children}</p1>
    </Popup>
    </span>
  )
}