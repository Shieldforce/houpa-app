import React from 'react';
import './ProductManageViewComponent.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faBan} from '@fortawesome/free-solid-svg-icons'

function ProductManageViewComponent({ product }) {
    let urlImage = "";
    if(product.images[0]){urlImage = product.images[0].url}
    const edit = <FontAwesomeIcon className="fa-icon-custom-edit" style={{ color:"#5F12B6" }} icon={faEdit} size="2x"/>
    const ban = <FontAwesomeIcon className="fa-icon-custom-ban" style={{ color:"#cecece" }} icon={faBan} size="2x"/>
    return (
        <div className="App-ProductManageViewComponent row">
            <div className="col-1 mt-3">
                <img className="App-manage-img-product" src={ urlImage }  alt=""/>
            </div>
            <div className="col-9 mt-3">
                <h4>{ product.name }</h4>
                <p>{ product.brand }</p>
                <p>{ product.reference }</p>
            </div>
            <div className="col-2 mt-5">
                { edit } { ban }
            </div>
        </div>
    );
}

export default ProductManageViewComponent;
