import React from 'react';
import './HeaderManageContentComponent.css';
import SearchCategoriesComponent from "../SearchCategories/SearchCategoriesComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function HeaderManageContentComponent({ handleSearchProducts, setProducts }) {
    const iconSearch = <FontAwesomeIcon icon={faSearch} size="1x"/>
    return (
        <div className="App-HeaderContentComponent container">
            <div className="row">
                <div className="App-SearchNavigation offset-4 col-4">
                    <div className="App-div-search">
                        { iconSearch } <SearchCategoriesComponent handleSearchProducts={handleSearchProducts}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderManageContentComponent;
