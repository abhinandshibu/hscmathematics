import React from 'react';

export default function Definition({word, definition}) {
    return (
      <span onClick={() => alert(definition)}>
        <code>{word}</code>
      </span>
    );
  }