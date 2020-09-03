import React from 'react';

//import App component styling
import './App.css'

//import components
import Search from './Search';
import Filter from './Filter';


//search url for volumes search within google books api
const searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=shaba'



//format the query parameters
 const formatQueryParams = (params) =>{
  const queryItems = Object.keys(params)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
return queryItems.join('&');
 }


class App extends React.Component {

  submitHandler(e){
  e.preventDefault();
  console.log('Submit handler message recieved')
  }

//initialize state
state = {
  books: [],
  queryString: searchUrl,
}





//make call to google book api  
componentDidMount(){
fetch(searchUrl)
.then()
.then(response =>{
  console.log('About to check for errors');
  if(!response.ok){
    console.log('An error did occur, let\'s throw an error')
    throw new Error('Something went brutally wrong'); //throw error here
  }
  return response;
})
.then(response => response.json())
.then(responseJson => console.log(responseJson))
.catch(err => console.log('we had a big error: ', err))
}

render(){

  return (
    <main className="App">
      <header>
        <h1>Google Book Search</h1>
      </header>
      <Search submitHandler={this.submitHandler}/>
      <Filter/>
    </main>
  );
}
}
export default App;
