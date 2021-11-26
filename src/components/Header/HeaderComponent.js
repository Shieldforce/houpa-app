import React from 'react';
import NavbarComponent from '../Navbar/NavbarComponent';
import './HeaderComponent.css';
import imgLogo from '../Imgs/logo-h.svg'

function HeaderComponent() {
  

  return (
    <div className="App-HeaderComponent">
      <NavbarComponent/>
      <div className="App-LogoContainer">
        <img className="App-LogoImg" src={imgLogo}/>
      </div>
    </div>
  );
}

export default HeaderComponent;
