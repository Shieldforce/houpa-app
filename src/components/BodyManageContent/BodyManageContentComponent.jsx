import React from 'react';
import './BodyManageContentComponent.css';
import ProductManageViewComponent from "../ProductManageView/ProductManageViewComponent";

function BodyManageContentComponent({ products }) {
    return (
        <div className="App-BodyManageContentComponent container">
            {<div className="row p-3">
                { products.map((product) => (
                    <ProductManageViewComponent key={product.id} product={ product }/>
                )) }
            </div>}
        </div>
    );
}

export default BodyManageContentComponent;
