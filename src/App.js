import './App.css';
import Header from './components/Header'
import { Component } from 'react';
import apiKey from './config';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Potter from './components/Topics/Potter';
import Marvel from './components/Topics/Marvel';
import StarWars from './components/Topics/StarWars';
import The100 from './components/Topics/The100';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" render={() => <Home />} />
            <Route path="/potter" render={() => <Potter />} />
            <Route path="/marvel" render={() => <Marvel />} />
            <Route path="/starwars" render={() => <StarWars />} />
            <Route path="/the100" render={() => <The100 />} />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
