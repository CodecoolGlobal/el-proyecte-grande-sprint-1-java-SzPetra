import React from 'react';

function SearchItem({search, setSearch}) {
    return (
        <form className={'search-form'} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search</label>
            <input
                type='text'
                id='search'
                role='searchbar'
                placeholder='Search Companies'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
}

export default SearchItem;
