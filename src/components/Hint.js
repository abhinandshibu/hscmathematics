import React from 'react';
import Admonition from '@theme/Admonition';
import styles from './styles.module.scss';

export default function Hint({children}) {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      {visible && <Admonition type="hint">
        {children}
      </Admonition>}
      <button className={"button button--success button--lg"} onClick={() => setVisible(s => !s)}>Hint</button>
    </>
  );
}