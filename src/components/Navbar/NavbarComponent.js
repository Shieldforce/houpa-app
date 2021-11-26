import React from 'react';
import LinkComponent from '../Links/LinkComponent';
import './NavbarComponent.css';

function NavbarComponent() {
  return (
    <div className="App-NavbarComponent">
      <LinkComponent textComponent="Vitrines"/>
      <LinkComponent textComponent="Gerenciar Vitrines"/>
    </div>
  );
}

export default NavbarComponent;
