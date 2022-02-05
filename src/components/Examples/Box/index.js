import React from 'react';
import styles from './styles.module.css';

function ExampleBox({children}) {
  return (
    <div className={styles.Admonition}>
      <div className={styles.AdmonitionContent}>{children}</div>
    </div>
  );
}

export default ExampleBox;