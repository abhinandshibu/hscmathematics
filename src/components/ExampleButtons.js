import React from 'react';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import IconPlay from '@site/src/components/IconPlay';

export default function ExampleButtons({hint, answer, solution}) {
  const [hintRevealed, setHintRevealed] = React.useState(false);
  const [answerRevealed, setAnswerRevealed] = React.useState(false);
  return (
    <div>
       {hintRevealed && <Admonition type="hint">
        {hint}
      </Admonition>}
      {answerRevealed && <Admonition type="answer">
        {answer}
      </Admonition>}
      <button className={"button button--success button--lg"} onClick={() => setHintRevealed(s => !s)}>Hint</button>
      <Link to={solution}><button className={"button button--primary button--lg"}>Solution <IconPlay /></button></Link>
      <button className={"button button--danger button--lg"} onClick={() => setAnswerRevealed(s => !s)}>Answer</button>
    </div>
  );
}