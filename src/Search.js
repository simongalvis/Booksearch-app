import React from'react';

//import search component styling
import './Search.css'

class Search extends React.Component{

render(){







    return( 
    <div id='formSection' onSubmit={(e)=>this.props.submitHandler(e)}>
        <form>
            <label htmlFor='searchbar'>Search: </label>
            <input  type='text' name='searchbar' id='searchbar'
             onChange={e => this.props.titleChanged(e.target.value)}
              />
            <input type='submit' value='Search' />
        </form>
    </div>)
}




}

export default Search;