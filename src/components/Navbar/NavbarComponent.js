import React from 'react';
import LinkComponent from '../Links/LinkComponent';
import './NavbarComponent.css';

function NavbarComponent() {
  return (
    <div className="App-NavbarComponent">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <LinkComponent textComponent="Vitrines"/>
            <LinkComponent textComponent="Gerenciar Vitrines"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
