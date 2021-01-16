import Navbar from './Navbar.js';
import Home from './Home';
import { useState } from 'react';

const App = () => {

  const [searchTerm, setSearchTerm ] = useState('');


  // change search term
  const changeTerm = (value) => setSearchTerm(value);

  return (
    <div className="App">
      <Navbar changeTerm={changeTerm}/>
      <div className="content">
        <Home searchTerm={searchTerm}/>
      </div>
    </div>
  );
}

export default App;
