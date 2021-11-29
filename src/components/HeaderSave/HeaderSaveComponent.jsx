import React from 'react';
import './HeaderSaveComponent.css';
import {Link} from "react-router-dom";

function HeaderSaveComponent({ products }) {
    return (
        <div className="App-HeaderSaveComponent">
            <div className="container row">
                <div className="col-6">
                    <span className="text-black display-6">Cadastro de Produto</span>
                </div>
                <div className="col-6" style={ {textAlign:"right",color:"#cecece !important"} }>
                    <button
                        className="btn btn-success mt-2 btn-custom"
                    ><Link style={{textDecoration:"none", color:"white"}} to="/saveProduct">Salvar Produto</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeaderSaveComponent;
