import React from 'react';
import styles from './styles.module.css';
import IconImportant from './Icon';

function ImportantAdmonition({title='Important', children}) {
  return (
    <div className={styles.Admonition}>
      <div className={styles.AdmonitionHeading}>
        <h5>
          <span className={styles.AdmonitionIcon}>{<IconImportant />}</span>
          {title}
        </h5>
      </div>
      <div className={styles.AdmonitionContent}>{children}</div>
    </div>
  );
}

export default ImportantAdmonition;