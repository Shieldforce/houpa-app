import React from 'react';
import './BreadcrumbComponent.css';
import LinkComponent from '../Links/LinkComponent';
import TitleIconComponent from '../TitleIcon/TitleIconComponent';

function BreadcrumbComponent() {
    return (
        <div className="App-BreadcrumbComponent">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <LinkComponent textComponent="Houpa"/>
                        <LinkComponent textComponent=">"/>
                        <LinkComponent textComponent="Vitrines"/>
                    </div>
                    <div className="col-12 mt-4">
                        <TitleIconComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadcrumbComponent;
