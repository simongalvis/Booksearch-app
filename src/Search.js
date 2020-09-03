import React from'react';

//import search styling
import './Search.css'

class Search extends React.Component{

render(){


    return( 
    <div id='formSection'>
        <form>
            <label htmlFor='searchbar'>Search: </label>
            <input type='text' name='searchbar' id='searchbar' />
            <input type='submit' value='Search'/>
        </form>
    </div>)
}



}

export default Search;