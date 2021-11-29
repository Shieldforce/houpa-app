import React from 'react';
import './FormSaveComponent.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

function FormSaveComponent({ products }) {

    const infor = <FontAwesomeIcon icon={faInfoCircle} size="1x"/>
    return (
        <div className="App-FormSaveComponent">
            <div className="row">
                <div className="col-12">
                    <span style={{float:"left",marginLeft:"20px", marginRight:"10px", color:"#"}}> {infor} </span>
                    <span style={{float:"left"}}> Informações do Produto </span>
                </div>
                <div className="col-12">
                    <form>
                        <div className="row">
                            <div className="col-6 offset-3">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormSaveComponent;
