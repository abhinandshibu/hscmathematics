import React from 'react';
import IconPlay from '@site/src/components/IconPlay';
import { useState } from 'react';
import Popup from './Popup';
import Player from './Player';
import HintAdmonition from '../../Admonitions/Hint';
import AnswerAdmonition from '../../Admonitions/Answer';

export default function HSAButtons({hint, answer, url}) {
  const [hintRevealed, setHintRevealed] = React.useState(false);
  const [answerRevealed, setAnswerRevealed] = React.useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <div className={"margin-bottom--md"}>
        <button className={"button button--success button--lg"} onClick={() => setHintRevealed(s => !s)}>Hint</button>
        <button className={"button button--primary button--lg"} onClick={() => setButtonPopup(true)}>Solution <IconPlay /></button>
        <button className={"button button--danger button--lg"} onClick={() => setAnswerRevealed(s => !s)}>Answer</button>
      </div>
       {hintRevealed && <HintAdmonition>
        {hint}
      </HintAdmonition>}
      {answerRevealed && <AnswerAdmonition>
        {answer}
      </AnswerAdmonition>}
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Player url={url}/>
      </Popup>
    </>
  );
}