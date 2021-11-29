import React from 'react';
import './HeaderContentComponent.css';
import MenuCategoriesComponent from "../MenuCategories/MenuCategoriesComponent";
import SearchCategoriesComponent from "../SearchCategories/SearchCategoriesComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function HeaderContentComponent({ handleSearchProducts, setProducts }) {
    const iconSearch = <FontAwesomeIcon icon={faSearch} size="1x"/>
    return (
        <div className="App-HeaderContentComponent container">
            <div className="row">
                <div className="App-CategoryNavigation col-3">
                    <MenuCategoriesComponent textContent="Todos" setProducts={setProducts}/>
                </div>
                <div className="App-SearchNavigation offset-1 col-5">
                    <div className="App-div-search">
                        { iconSearch } <SearchCategoriesComponent handleSearchProducts={handleSearchProducts}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderContentComponent;
