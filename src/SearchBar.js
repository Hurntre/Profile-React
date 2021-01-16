// import { useState }  from 'react';
import React from 'react';


const Search = ({ changeTerm }) => {
    
    return ( 
        <input type="text" placeholder="search...."  onChange={event => {changeTerm(event.target.value)}} />
     );
}

 
export default Search;