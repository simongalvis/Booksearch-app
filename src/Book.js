import React from 'react';

//import Book styling
import './Book.css';



class Book extends React.Component{


renderBooks = () =>{
    return this.props.result.items.map((item, key) => (
        <li className='bookItem' key={key}>
            <h2>{item.volumeInfo.title}</h2>
            <section className='bookItemContent'>
                <a href={item.volumeInfo.infoLink} target='_blank'>
                    <img className='bookItemThumbnail' alt='bookThumbnail'  src={item.volumeInfo.imageLinks.thumbnail}/>
                </a>
            <p className='bookItemInfo'>Author: {item.volumeInfo.authors}<br/>
            Price: {item.saleInfo.country}
            </p><br/>
            
            
            </section>
        </li>
    ))
}


render(){

console.log(this.props.result);

    return(
        <ul className='bookList'>
            {this.renderBooks()}
        </ul>
            
    )
}


}

export default Book;