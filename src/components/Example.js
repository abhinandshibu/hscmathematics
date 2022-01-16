import React from 'react';
import Admonition from '@theme/Admonition';
import styles from './styles.module.scss';

export default function exampleButtons({children}) {
  const [hintRevealed, setHintRevealed] = React.useState(false);
  const [answerRevealed, setAnswerRevealed] = React.useState(false);
  return (
    <div>
        {children}
      <button className={styles.hintButton} onClick={() => setHintRevealed(s => !s)}>Hint</button>
      <button className={styles.answerButton} onClick={() => setAnswerRevealed(s => !s)}>Answer</button>
    </div>
  );
}

export default function Hint({children}) {
  return (
    <div>
      {<Admonition type="hint">
        {children}
      </Admonition>}
    </div>
  );
}

export default function Answer({children}) {
  return (
    <div>
      {<Admonition type="answer">
        {children}
      </Admonition>}
    </div>
  );
}