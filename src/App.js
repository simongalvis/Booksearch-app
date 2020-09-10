  
import React from 'react';

//import App component styling
import './App.css'

//import components
import Search from './Search';
import Filter from './Filter';
import Book from './Book';


//search url for volumes search within google books api
const searchUrl = 'https://www.googleapis.com/books/v1/volumes?'



//format the query parameters
const formatQueryParams = (params) =>{
const queryItems = Object.keys(params)
.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
return queryItems.join('&');
}


class App extends React.Component {

submitHandler = (e) =>{
  e.preventDefault();

//Create parameters for dynamically generated URL
  let params ={
    q:this.state.title,
    printType: this.state.printType,
    filter: this.state.bookType,
    maxResults: 40, 
  }

  let url = searchUrl + formatQueryParams(params);
  //console.log(url);
  
  fetch(url)
    .then()
    .then(response =>{
    //console.log('About to check for errors');
    if(!response.ok){
    //console.log('An error did occur, let\'s throw an error')
    throw new Error('Something went brutally wrong'); //throw error here
  }
    return response;
})
    .then(response => response.json())
    .then(responseJson => this.setState({
          result: responseJson,
          shouldRender: true
}))
    .catch(err => console.log('we had a big error: ', err))
     //console.log('Submit handler message recieved')
  }


//initialize state
  state = {
    queryString: searchUrl,
    result:'',
    printType: 'all',
    bookType: 'partial',
    shouldRender: false,
}


  titleChanged = (title) =>{
    this.setState({ title }); 
    // const queryStringg = this.state.queryString //+ this.formatQueryParams(this.params) 
    // console.log(queryStringg) 
    //console.log(title);
   }

//Handle change in print type    
  printTypeChanged = (printType) =>{
    this.setState({printType});
    //console.log(printType);
}

//Handle change in print type(filter)
  bookTypeChanged = (bookType) =>{
    this.setState({bookType});
    //console.log(bookType);
}

   












render(){
const renderbooks = this.state.shouldRender
? <Book result={this.state.result} testProp='I am a test prop'/>
: <div>Blah</div>;

  return (
    <main className="App">
      <header>
        <h1>Google Book Search</h1>
      </header>
      <Search  titleChanged ={this.titleChanged}
               submitHandler={this.submitHandler}
               queryStringChanged={this.queryStringChanged}/>
      <Filter printTypeChanged={this.printTypeChanged}
              bookTypeChanged={this.bookTypeChanged}/>
      {renderbooks}
      
    </main>
  );
}
}

export default App;

