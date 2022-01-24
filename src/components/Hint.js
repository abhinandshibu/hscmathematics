import React from 'react';
import Admonition from '@theme/Admonition';

export default function Hint({children}) {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <button className={"button button--success button--lg margin-bottom--md"} onClick={() => setVisible(s => !s)}>Hint</button>
      {visible && <Admonition type="hint">
        {children}
      </Admonition>}
    </>
  );
}