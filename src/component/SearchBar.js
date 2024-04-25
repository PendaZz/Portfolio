import React, { useState } from 'react';

/**
 * Renders a search bar component with an input field and a search button.
 *
 * @param {function} onSubmit - Callback function to be called when the search button is clicked.
 * @return {JSX.Element} The search bar component.
 */
const SearchBar = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSubmit(searchTerm);
    };

    return (
        <div>
            <input
            aria-labelledby='search-button'
            name='search'
            id='search'
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
            id='search-button'
            type='button'
            onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
