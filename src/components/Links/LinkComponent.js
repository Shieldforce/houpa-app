import React from 'react';
import './LinkComponent.css';

function LinkComponent({ textComponent }) {
  return (
    <a className="App-LinkComponent col-2">{ textComponent }</a>
  );
}

export default LinkComponent;
