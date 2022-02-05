import React from 'react';
import styles from './styles.module.css';
import IconDefinition from './Icon';

function DefinitionAdmonition({title='Definition', children}) {
  return (
    <div className={styles.Admonition}>
      <div className={styles.AdmonitionHeading}>
        <h5>
          <span className={styles.AdmonitionIcon}>{<IconDefinition />}</span>
          {title}
        </h5>
      </div>
      <div className={styles.AdmonitionContent}>{children}</div>
    </div>
  );
}

export default DefinitionAdmonition;