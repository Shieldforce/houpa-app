import React from 'react';
import './TitleIconComponent.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStore, faPlus, faEdit} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function TitleIconComponent() {

    const store = <FontAwesomeIcon icon={faStore} size="2x"/>
    const plus = <FontAwesomeIcon icon={faPlus} size="2x"/>
    const edit = <FontAwesomeIcon icon={faEdit} size="2x"/>

    return (
        <div className="App-TitleIconComponent">
            <BrowserRouter>
                <Routes>
                    {/*Rota de Loja de Produtos*/}
                    <Route
                        path="/"
                        element= {
                            <>
                                {store} <span className="text-black display-6">Vitrines</span>
                            </>
                        }
                    />
                    {/*Rota de Gestão de Produtos*/}
                    <Route
                        path="/gerenciar"
                        element= {
                            <div className="row">
                                <div className="col-6">
                                    {edit} <span className="text-black display-6">Gerenciar Vitrines</span>
                                </div>
                                <div className="col-6" style={ {textAlign:"right",color:"#cecece !important"} }>
                                    <button
                                        className="btn btn-success mt-2 btn-custom"
                                    ><Link style={{textDecoration:"none", color:"white"}} to="/saveProduct">Cadastrar Produto</Link>
                                    </button>
                                </div>
                            </div>
                        }
                    />
                    {/*Rota de Cadastro de Produtos*/}
                    <Route
                        path="/saveProduct"
                        element= {
                            <>
                                {plus} <span className="text-black display-6">Cadastro de Produto</span>
                            </>
                        }
                    />
                    {/*Rota de Edição de Produtos*/}
                    <Route
                        path="/saveProduct/:id"
                        element= {
                            <>
                                {plus} <span className="text-black display-6">Edição de Produto</span>
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default TitleIconComponent;
