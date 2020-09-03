import React from'react';

//import search component styling
import './Search.css'

class Search extends React.Component{

render(props){







    return( 
    <div id='formSection'>
        <form>
            <label htmlFor='searchbar'>Search: </label>
            <input type='text' name='searchbar' id='searchbar' onChange={this.props.submitHandler} />
            <input type='submit' value='Search' onSubmit={(e)=>this.props.submitHandler(e)}/>
        </form>
    </div>)
}



}

export default Search;