import React from 'react';
import './ProductManageViewComponent.css';

function ProductManageViewComponent({ product }) {
    let urlImage = "";
    if(product.images[0]){urlImage = product.images[0].url}
    return (
        <div className="App-ProductManageViewComponent row">
            <div className="col-1">
                <img className="App-img-product" src={ urlImage }  alt=""/>
            </div>
            <div className="col-9">
                <h4>{ product.name }</h4>
            </div>
            <div className="col-2">
                <p>{ product.price }</p>
            </div>
        </div>
    );
}

export default ProductManageViewComponent;
