import React from 'react';

//import Filter component styling
import './Filter.css'


class Filter extends React.Component{

    render(){


        return (
        
        <div id='filter-section'>
            <form>
                
                    <label htmlFor='print-type'>Print Type:</label>
                    <select id='print-type' name='print-type' onChange={e =>this.props.printTypeChanged(e.target.value)}>
                        <option value='all'>All</option>
                        <option value='books' >Book</option>
                        <option value='magazines'>Magazine</option>
                    </select>
                

                
                    <label htmlFor='book-type'>Book Type:</label>
                    <select id='book-type' name='book-type' onChange={e =>this.props.bookTypeChanged(e.target.value)}>
                        <option value='None'>All</option>
                        <option value='partial'>Partial</option>
                        <option value='full'>Full</option>
                        <option value='free-ebooks'>Free eBook</option>
                        <option value='paid-ebooks'>Paid eBook</option>
                        <option value='ebooks'>eBooks</option>
                    </select>
                
            </form>
        
        </div>

        )
    }
}


export default Filter;