import React from 'react';
import styles from './styles.module.css';
import IconAnswer from './Icon';

function AnswerAdmonition({title='Answer', children}) {
  return (
    <div className={styles.Admonition}>
      <div className={styles.AdmonitionHeading}>
        <h5>
          <span className={styles.AdmonitionIcon}>{<IconAnswer />}</span>
          {title}
        </h5>
      </div>
      <div className={styles.AdmonitionContent}>{children}</div>
    </div>
  );
}

export default AnswerAdmonition;