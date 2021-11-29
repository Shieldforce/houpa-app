import React from 'react';
import './TitleIconComponent.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStore} from '@fortawesome/free-solid-svg-icons'

function TitleIconComponent() {

    const store = <FontAwesomeIcon icon={faStore} size="2x"/>

    return (
        <div className="App-TitleIconComponent">
            {store} <span className="text-black display-6">Vitrines</span>
        </div>
    );
}

export default TitleIconComponent;
