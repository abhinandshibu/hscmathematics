import React from 'react';
import styles from './styles.module.css';
import IconSyllabus from './Icon';

function DefinitionAdmonition({title='Syllabus', children}) {
  return (
    <div className={styles.Admonition}>
      <div className={styles.AdmonitionHeading}>
        <h5>
          <span className={styles.AdmonitionIcon}>{<IconSyllabus />}</span>
          {title}
        </h5>
      </div>
      <div className={styles.AdmonitionContent}>{children}</div>
    </div>
  );
}

export default DefinitionAdmonition;