import React from 'react';

//import App styling
import './App.css'

//import components
import './Search'
import Search from './Search';


function App() {
  return (
    <main className="App">
      <header>
        <h1>Google Book Search</h1>
      </header>
      <Search/>
    </main>
  );
}

export default App;
