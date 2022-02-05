import React from 'react';
import styles from './styles.module.css';
import IconSolution from './Icon';

function SolutionAdmonition({title='Solution', children}) {
  return (
    <div className={styles.Admonition}>
      <div className={styles.AdmonitionHeading}>
        <h5>
          <span className={styles.AdmonitionIcon}>{<IconSolution />}</span>
          {title}
        </h5>
      </div>
      <div className={styles.AdmonitionContent}>{children}</div>
    </div>
  );
}

export default SolutionAdmonition;