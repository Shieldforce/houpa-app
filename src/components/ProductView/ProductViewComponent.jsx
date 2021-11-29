import React from 'react';
import './ProductViewComponent.css';

function ProductViewComponent({ product }) {
    let urlImage = "";
    if(product.images[0]){urlImage = product.images[0].url}
    return (
        <div className="App-ProductViewComponent col-3">
            <img className="App-img-product" src={ urlImage }  alt=""/>
            <h4>{ product.name }</h4>
            <p>{ product.price }</p>
        </div>
    );
}

export default ProductViewComponent;
