import React from 'react';
import styles from './styles.module.css';
import IconHint from './Icon';

function HintAdmonition({title='Hint', children}) {
  return (
    <div className={styles.Admonition}>
      <div className={styles.AdmonitionHeading}>
        <h5>
          <span className={styles.AdmonitionIcon}>{<IconHint />}</span>
          {title}
        </h5>
      </div>
      <div className={styles.AdmonitionContent}>{children}</div>
    </div>
  );
}

export default HintAdmonition;