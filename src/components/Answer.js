import React from 'react';
import Admonition from '@theme/Admonition';
import styles from './styles.module.scss';

export default function Answer({children}) {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      {visible && <Admonition type="answer">
        {children}
      </Admonition>}
      <button className={"button button--danger button--lg"} onClick={() => setVisible(s => !s)}>Answer</button>
    </>
  );
}