import React from 'react';
import LinkComponent from '../Links/LinkComponent';
import './NavbarComponent.css';

function NavbarComponent() {
    return (
        <div className="App-NavbarComponent">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <LinkComponent textComponent="Vitrines" pathGo="/"/>
                        <LinkComponent textComponent="Gerenciar Vitrines" pathGo="/gerenciar"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent;
