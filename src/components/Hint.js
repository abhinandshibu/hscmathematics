import React from 'react';
import Admonition from '@theme/Admonition';
import styles from './styles.module.scss';

export default function Hint({children}) {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      {visible && <Admonition type="tip">
        {children}
      </Admonition>}
      <button className={styles.hintButton} onClick={() => setVisible(s => !s)}>Hint</button>
    </div>
  );
}