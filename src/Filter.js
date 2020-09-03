import React from 'react';

//import Filter component styling
import './Filter.css'


class Filter extends React.Component{

    render(){


        return (
        
        <div>
            <form>
                
                    <label htmlFor='print-type'>Print Type:</label>
                    <select id='print-type' name='print-type'>
                        <option value='None'>All</option>
                    </select>
                

                
                    <label htmlFor='book-type'>Book Type:</label>
                    <select id='book-type' name='book-type'>
                        <option value='None'>All</option>
                    </select>
                
            </form>
        
        </div>

        )
    }
}


export default Filter;