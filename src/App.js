import './App.css';
import Searchbar from './components/Searchbar'
import { Component } from 'react';
import Navigation from './components/Navigation';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <>
        <div class="container">
          <Searchbar />
          <Navigation />
          <Results />
        </div>
      </>
    );
  }
}

export default App;
