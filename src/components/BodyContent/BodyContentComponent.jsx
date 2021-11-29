import React from 'react';
import './BodyContentComponent.css';
import ProductViewComponent from "../ProductView/ProductViewComponent";

function BodyContentComponent({ products }) {
    return (
        <div className="App-BodyContentComponent container">
            {<div className="row p-3">
                { products.map((product) => (
                    <ProductViewComponent key={product.id} product={ product }/>
                )) }
            </div>}
        </div>
    );
}

export default BodyContentComponent;
