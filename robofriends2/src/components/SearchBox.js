import React from 'react';

//using destructuring here alows us to grab PROPS object and properties
const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'> 
            <input
                className= 'pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;