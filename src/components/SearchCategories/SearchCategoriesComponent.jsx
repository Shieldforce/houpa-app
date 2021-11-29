import React, {useState} from 'react';
import './SearchCategoriesComponent.css';

function SearchCategoriesComponent({ handleSearchProducts }) {
    const [valueSearch, setValueSearch] = useState("");
    return (
        <input
            autoFocus
            className="App-input-search"
            type="search"
            value={valueSearch}
            onChange={(e) => {handleSearchProducts(e.target.value); setValueSearch(e.target.value)}}
            name="search"
            placeholder="Pesquisar"
        />
    );
}

export default SearchCategoriesComponent;
