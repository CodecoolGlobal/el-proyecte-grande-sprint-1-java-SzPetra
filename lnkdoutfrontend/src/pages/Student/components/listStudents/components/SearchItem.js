import React from 'react';

function SearchItem({search, setSearch}) {
    return (
        <form className={'search-form'} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search' hidden={true}></label>
            <input
                type='text'
                id='search'
                role='searchbar'
                placeholder='Search Students'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
}

export default SearchItem;