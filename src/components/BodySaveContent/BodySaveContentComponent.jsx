import React from 'react';
import './BodySaveContentComponent.css';
import FormSaveComponent from "../FormSave/FormSaveComponent";
import HeaderSaveComponent from "../HeaderSave/HeaderSaveComponent";

function BodySaveContentComponent({ products }) {
    return (
        <div className="App-BodySaveContentComponent container">
            <HeaderSaveComponent/>
            <FormSaveComponent/>
        </div>
    );
}

export default BodySaveContentComponent;
